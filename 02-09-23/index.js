function checkLogs(log) {
  if (log.length === 0) return 0;
  else if (log.length === 1) return 1;
  else {
    let dayCount = 1;
    for (let i = 0; i < log.length; i++) {
      let time1 = log[i].split(":");
      let time2 = log[i + 1]?.split(":");
      if (time1 && time2) {
				if(time1[0] > time2[0]) {
					dayCount++;
				} else if(time1[0] === time2[0] && time1[1] > time2[1]) {
					dayCount++;
				} else if(time1[0] === time2[0] && time1[1] === time2[1] && time1[2] >= time2[2]) {
					dayCount++
				}
      }
    }
    return dayCount;
  }
}
