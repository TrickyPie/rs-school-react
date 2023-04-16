interface FormResult {
  fName: string;
  lName: string;
  avatar: FileList;
  avatarUrl: string;
  birthday: string;
  region: string;
  promo: boolean;
  dream: string;
}

export default FormResult;

export type FormResultForState = Omit<FormResult, 'avatar'>;
