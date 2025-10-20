import z from "zod";

export type ProductType = {
  id: number | string;
  title: string;
  category: string;
  character: string;
  series: string;
  manufacture: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
};
export type ProductListType = ProductType[];

export type CartItemType = ProductType & { quantity: number };
export type CartItemsType = CartItemType[];

export const shippingFormSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().min(3, "Email is required"),
  phone: z.number().min(11, "Phone number is required"),
  address: z.string().min(3, "Address is required"),
  city: z.string().min(3, "City is required"),
})

export type shippingFormInputs = z.infer<typeof shippingFormSchema>;

export const paymentFormSchema = z.object({
  cardHolder: z.string().min(3, "Card holder is required"),
  cardNumber: z.number().min(16, "Card number is required"),
  expirationDate: z.string().regex(/^((0[1-9])|(1[0-2]))\/(\d{2})$/, "Expiration date must be in MM/YY format!"
  ),
  cvv: z.string().min(3, "CVV is required!").max(3, "CVV is required!"),
})

export type paymentFormInputs = z.infer<typeof paymentFormSchema>;

export type CartStoreStateType= {
  cart:CartItemsType,
  hasHydrated:boolean,
}

export type CartStoreActionsType= {
  addToCart:(product:CartItemType)=>void,
  removeFromCart:(product:CartItemType)=>void,
  clearCart:()=>void,
}