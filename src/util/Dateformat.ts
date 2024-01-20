export const DateFormat = (gmtString: string): string => {
    const gmtDate = new Date(gmtString);
    
    const localDate = new Date(gmtDate.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
    
    const day = localDate.getDate();
    const month = localDate.toLocaleString('default', { month: 'long' });
    const year = localDate.getFullYear();
    
    const dayName = new Intl.DateTimeFormat('id-ID', { weekday: 'long' }).format(localDate);
    
    const formattedDate = `${dayName}, ${day} ${month} ${year}`;
    
    return formattedDate;
  }