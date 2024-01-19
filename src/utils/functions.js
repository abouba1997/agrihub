const getCategoryName = (categories, menuItem) => {
  if (categories?.length > 0) {
    const foundCategory = categories.find(
      (category) => category.id === menuItem.category
    );
    return foundCategory ? foundCategory.categoryName : "";
  }
};

const isValidUrl = (string) => {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
};

function formatDate(timestamp) {
  const date = new Date(timestamp);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `Le ${day}/${month}/${year} à ${hours}:${minutes}`;
}

export { getCategoryName, isValidUrl, formatDate };
