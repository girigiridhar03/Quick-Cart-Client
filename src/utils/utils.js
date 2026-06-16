export const syncImages = (incomingFiles, setState, setErrors = null) => {
  setState((prev) => ({
    ...prev,
    images: [...prev.images, ...incomingFiles].slice(0, 5),
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
