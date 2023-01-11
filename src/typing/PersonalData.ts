export interface PersonalData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  birthday: string;
  about?: string;
  avatar?: {
    encodedFile: string;
    fileSize: number;
  };
}
