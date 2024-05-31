import { parsePhoneNumberFromString } from "libphonenumber-js";

export function formatPhoneNumber(phoneNumber) {
  const parsedNumber = parsePhoneNumberFromString(phoneNumber, "ID");

  if (parsedNumber) {
    return parsedNumber.formatNational();
  } else {
    throw new Error("Nomor telepon tidak valid.");
  }
}

export function formatCurrency(value) {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  return formatter.format(value);
}
