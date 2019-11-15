import COUNTRIES from './countries.json';

import admin from './firebase';

interface Country {
  name: string;
}

const makeCountries = async () => {
  /*
   * For each country in countries
   * Set a new document on the collection countries
   */
  const db = admin.firestore();
  const batch = db.batch();
  const ref = db.collection('countries');

  COUNTRIES.map(({ alpha2: id, name }) => {
    const countryRef = ref.doc(id);
    const countryData: Country = {
      name,
    };

    batch.set(countryRef, countryData);
  });

  try {
    await batch.commit();
  } catch (error) {
    console.log(error);
  }
};

makeCountries();
