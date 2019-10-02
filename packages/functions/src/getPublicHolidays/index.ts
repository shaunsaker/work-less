import * as functions from "firebase-functions";
import { getHolidays } from "public-holidays";

import admin from "../firebase";

const db = admin.firestore();

/*
 * Accepts get requests with the following query params attached:
 *
 * country
 * key
 * lang
 *
 * If the key is valid, ie. it is a user and X?
 *
 * Checks firestore if public holidays for that country exists
 * If so:
 *
 * Returns those public holidays
 *
 * Else:
 *
 * Gets the public holidays
 * Saves them to Firestore
 * Returns those public holidays
 */
interface Query {
  country: string;
  key: string;
  lang: string;
}

interface Holiday {
  name: string;
  date: string;
  id: string;
}

export const getPublicHolidays = functions.https.onRequest(
  async (request, response) => {
    const { query } = request;
    const { key }: Query = query;

    if (key) {
      try {
        /*
         * Does the user exist?
         */
        await admin.auth().getUser(key);

        /*
         * If we make it here, it means the user exists
         */
        const { country, lang }: Query = query;

        if (!country || !lang) {
          response.status(400);
          response.send(
            "We require both the country and lang to complete the request"
          );
        } else {
          /*
           * TODO: We need to check that the country code and language codes are valid
           */

          const ref = db
            .collection("publicHolidays")
            .doc(country)
            .collection("languages")
            .doc(lang)
            .collection("publicHolidays");

          try {
            const collection = await ref.get();
            const data: Holiday[] = [];

            collection.forEach(doc => {
              const { name, date, id } = doc.data();

              data.push({ name, date, id });
            });

            if (!data.length) {
              /*
               * If there are no public holidays in the db
               * Go and get them
               * Else, just return them
               */
              try {
                const data = await getHolidays({ country, lang });

                /*
                 * Add each holiday in data as a new document to the ref
                 */
                for (const holiday of data) {
                  await ref.add(holiday);
                }

                response.status(200);
                response.send(data);
              } catch (error) {
                /*
                 * Internal server error
                 */
                response.status(500);
                response.send(error.message);
              }
            } else {
              response.status(200);
              response.send(data);
            }
          } catch (error) {
            /*
             * Internal server error
             */
            response.status(500);
            response.send(error.message);
          }
        }
      } catch (error) {
        response.status(401);
        response.send("Key is invalid");
      }
    } else {
      response.status(401);
      response.send("Key was not supplied");
    }
  }
);

export default getPublicHolidays;
