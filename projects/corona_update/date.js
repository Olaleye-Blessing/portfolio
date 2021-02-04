
export function myDate(milliseconds) {
    let dateObj = new Date(milliseconds);
    let day = dateObj.toLocaleString("en-US", {weekday: "short"});
    let month = dateObj.toLocaleString("en-US", {month: "short"});
    let date = dateObj.getDate();
    let year = dateObj.getFullYear();
    let fullYear = `${day} ${month} ${date}, ${year}`;
    return fullYear;
}
