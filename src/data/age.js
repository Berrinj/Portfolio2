export const calculateAge = (birthDate) => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

// Your birthdate - automatically calculates age from this date
export const myBirthDate = new Date(1990, 7, 18); // August 18, 1990
export const myAge = calculateAge(myBirthDate);
