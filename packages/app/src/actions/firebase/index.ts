import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { firebase as config } from '../../config';

const app = firebase.initializeApp(config);

export default app;
