import { z } from "zod";
import { User } from "@/types";
// import  {UserProfileForm } from "./UserProfileForm.1";

// export const formSchema = z.object({
//   email: z.string().optional(),
//   name: z.string().min(1, "name is required"),
//   addressLine1: z.string().min(1, "Address Line 1 is required"),
//   city: z.string().min(1, "City is required"),
//   country: z.string().min(1, "Country is required"),
// });

export const formSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(1, "name is required"),
  addressLine1: z.string().min(1, "Address Line 1 is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
  ingredients: z.string().min(0, "At least one ingredient is required"),
});


export type UserFormData = z.infer<typeof formSchema>;

export type Props = {
  currentUser: User;
  onSave: (userProfileData: UserFormData) => void;
  isLoading: boolean;
  title?: string;
  buttonText?: string;
};

// export default UserProfileForm;
