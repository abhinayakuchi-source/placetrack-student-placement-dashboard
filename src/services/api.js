export const loginUser = async (
  email,
  password
) => {

  await new Promise((resolve) =>
    setTimeout(resolve, 500)
  );

  if (!email || !password) {
    throw new Error(
      "Email and password are required."
    );
  }

  return {
    success: true,
    message: "Login successful",
  };
};

export const registerUser = async (
  userData
) => {

  await new Promise((resolve) =>
    setTimeout(resolve, 500)
  );

  return {
    success: true,
    message: "Registration successful",
    user: userData,
  };
};