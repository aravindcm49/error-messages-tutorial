const somethingDangerous = () => {
  if (Math.random() > 0.5) {
    throw new Error("Oh dear!");
  }
};

try {
  somethingDangerous();
} catch (error) {
  if(error instanceof Error) {
    console.log(error.message); // Use TypeErrors for easier handling and understanding.
  } else {
    throw error
  }
}
