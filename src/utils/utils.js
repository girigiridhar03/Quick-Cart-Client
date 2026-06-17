export const syncImages = (incomingFiles, setState, setErrors = null) => {
  setState((prev) => ({
    ...prev,
    images: [...(prev?.images ?? []), ...incomingFiles].slice(0, 5),
  }));
  if (setErrors) {
    setErrors((prev) => ({
      ...prev,
      images: "",
    }));
  }
};

export const handleFileChange = (e, setState, setErrors = null) => {
  const selectedFiles = Array.from(e.target.files || []);
  syncImages(selectedFiles, setState, setErrors);
  e.target.value = "";
};

export const handleClick = (ref) => {
  ref.current?.click();
};

export const handleDragOver = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

export const handleDrop = (e, setState, setErrors = null) => {
  e.preventDefault();
  e.stopPropagation();

  const droppedFiles = Array.from(e.dataTransfer.files);
  syncImages(droppedFiles, setState, setErrors);
};

export const handleChange = (e, setState) => {
  const { name, value } = e.target;
  if (name === "body") {
    if (value.length <= 500) {
      setState((prev) => ({ ...prev, [name]: value }));
    } else {
      setState((prev) => ({ ...prev, [name]: value.slice(0, 500) }));
    }
  } else {
    setState((prev) => ({ ...prev, [name]: value }));
  }
};

export const handleStar = (star, setState) => {
  setState((prev) => ({ ...prev, rating: star }));
};

export const getFormData = (obj) => {
  if (!obj) return;

  const formData = new FormData();

  for (let key in obj) {
    if (Array.isArray(obj[key]) && obj[key].length > 0) {
      obj[key].forEach((item) => formData.append(key, item));
    } else {
      formData.append(key, obj[key]);
    }
  }

  return formData;
};

