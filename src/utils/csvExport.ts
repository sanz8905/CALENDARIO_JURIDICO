export function convertToCSV<T>(data: T[], headers: Record<keyof T, string>): string {
  // Create CSV header row
  const headerRow = Object.values(headers).join(',');
  
  // Create data rows
  const rows = data.map(item => 
    Object.keys(headers)
      .map(key => item[key as keyof T])
      .map(value => `"${value}"`)
      .join(',')
  );
  
  return [headerRow, ...rows].join('\n');
}

export function downloadCSV(csvContent: string, fileName: string): void {
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  
  // Create download link
  const url = window.URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', fileName);
  
  // Trigger download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}