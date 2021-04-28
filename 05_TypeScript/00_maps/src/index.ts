import { CustomMap } from './CustomMap';
import { User } from './user';
import { Company } from './company';

const user = new User();
const company = new Company();

const customMap = new CustomMap('map');

customMap.addUserMarker(user);
customMap.addCompanyMarker(company);
