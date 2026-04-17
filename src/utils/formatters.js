
export function formatTime12h(time24) {
    if (!time24) return "";
  
    const [h, m] = time24.split(":").map(Number);
  
    const ampm = h >= 12 ? "PM" : "AM";
    const hour = h % 12 || 12;
  
    return `${hour}:${String(m).padStart(2, "0")} ${ampm}`;
  }


  // DATE: ISO → "03 April"
export function formatDateReadable(isoDate) {
    if (!isoDate) return "";
  
    const date = new Date(isoDate);
  
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
    });
  }