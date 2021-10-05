const FormatTime = (time: number, format?: string | number) => {
  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time - hours * 3600000) / 60000);
  const seconds = Math.floor((time - hours * 3600000 - minutes * 60000) / 1000);
  const milliseconds = Math.floor((time - hours * 3600000 - minutes * 60000 - seconds * 1000) / 10);

  // set default format
  if (!format) {
    format = 'hh:mm:ss';
  }

  // some useful formats
  // TODO requires some rework for the format strings to be more explicit and perhaps globally accessible as an enum
  switch (format) {
    case 'hh': // '01'
      return (hours < 10 ? '0' + hours : hours);
    case 'mm': // '05'
      return (minutes < 10 ? '0' + minutes : minutes);
    case 'ss': // '09'
      return (seconds < 10 ? '0' + seconds : seconds);
    case 'SS': // '55'
      return (milliseconds < 10 ? '0' + milliseconds : milliseconds);
    case 'mm:ss': // '05:09'
      return (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
    case 'hh:mm:ss': // '01:05:09'
      return (hours > 0 ?  hours : '00') + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
    case 'mm:ss:SS': // '05:09:55'
      return (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds) + ':' + (milliseconds < 10 ? '0' + milliseconds : milliseconds);
    case 'hh:mm:ss:SS': // '01:05:09:55'
      return (hours > 0 ? hours : '00') + ':' + (minutes > 0 ? minutes < 10 ? '0' + minutes + ':' : minutes : '') + (seconds < 10 ? '0' + seconds : seconds) + ':' + (milliseconds < 10 ? '0' + milliseconds : milliseconds);
    default: // ''
      return '';
  }

}

export { FormatTime };
