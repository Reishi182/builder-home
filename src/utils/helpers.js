import { parsePhoneNumberFromString } from "libphonenumber-js";
export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );

export function formatPhoneNumber(phoneNumber) {
  const parsedNumber = parsePhoneNumberFromString(phoneNumber, "ID");

  if (parsedNumber) {
    return parsedNumber.formatNational();
  } else {
    throw new Error("Nomor telepon tidak valid.");
  }
}
