import { ref, listAll, getDownloadURL } from "firebase/storage";
import JSZip from "jszip";
import { storage } from "../utils/firebase";
import Button from "./Button";
import { saveAs } from "file-saver";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { capitalizeFirstLetter } from "../utils/capitalLetter";

const DownloadFilesButton = () => {
  const [buttonText, setButtonText] = useState("Descargar");
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const category = searchParams.get("category");
  const folderName =
    capitalizeFirstLetter(type) + capitalizeFirstLetter(category);

  const getFilesFromFolder = async (folderPath) => {
    const folderRef = ref(storage, folderPath);

    try {
      const result = await listAll(folderRef); // List all items (files) in the folder
      const downloadUrls = await Promise.all(
        result.items.map(async (itemRef) => {
          return await getDownloadURL(itemRef); // Get the download URL for each file
        })
      );
      return downloadUrls;
    } catch (error) {
      console.error("Error fetching folder files:", error);
      throw error;
    }
  };

  // Zipping function
  const downloadAndZipFiles = async (downloadUrls) => {
    const zip = new JSZip();
    // Fetch and add files to zip
    await Promise.all(
      downloadUrls.map(async (url) => {
        const response = await fetch(url);
        const blob = await response.blob();
        const urlObj = new URL(url);
        let fileName = urlObj.pathname.split("/").pop(); // Get the file name from the path
        fileName = decodeURIComponent(fileName.split("?")[0]); // Remove any query parameters

        zip.file(fileName, blob);
      })
    );

    // Generate zip and allow user to download
    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "folder.zip"); // Save the zip file as folder.zip
  };

  // Handle download button logic
  const handleDownloadFolder = async () => {
    setLoading(true); // Set loading to true when download starts
    setButtonText("Descargando..."); // Update button text to show loading

    const folderPath = folderName; // Adjust this to your folder structure

    try {
      const downloadUrls = await getFilesFromFolder(folderPath); // Get all files from the folder
      await downloadAndZipFiles(downloadUrls); // Zip and download the files
      setButtonText("¡Descargado!"); // Show success message
    } catch (error) {
      console.error("Error downloading folder:", error);
      setButtonText("Error"); // Show error message in case of failure
    } finally {
      setLoading(false); // Set loading to false when download is finished
      setTimeout(() => setButtonText("Descargar"), 3000); // Reset button after 3 seconds
    }
  };

  // UI component
  return (
    <Button
      text={buttonText}
      onClick={() => handleDownloadFolder()}
      background="bg-red"
      textColor="#fff"
      disabled={loading} // Disable the button while loading
    />
  );
};

export default DownloadFilesButton;
