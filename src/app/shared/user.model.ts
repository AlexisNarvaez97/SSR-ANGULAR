export class Response {
  data: User[];
}

export class User {
  id: string;
  lastName: string;
  firstName: string;
  email: string;
  title: string;
  picture: string;
  phone?: string;
  location?: Location;
  gender?: string;
  registerDate?: string;
  dateOfBirth?: string;
}
export class Location {
  state: string;
  street: string;
  city: string;
  timezone: string;
  country: string;
}