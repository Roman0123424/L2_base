function howManyTimes(time1, time2){
    const start = new Date(time1.replace(' ', 'T')).getTime();
    const end = new Date(time2.replace(' ', 'T')).getTime();

    let total = 0;
    let curr = new Date(start);
    curr.setSeconds(0);
    curr.setMilliseconds(0);

    if (curr.getMinutes() > 0 && curr.getMinutes() < 30) {
        curr.setMinutes(30);
    } else if (curr.getMinutes() > 30) {
        curr.setMinutes(0);
        curr.setHours(curr.getHours() + 1);
    }

    while (curr.getTime() <= end + 60000) {
        const m = curr.getMinutes();
        if (m === 0) {
            let h = curr.getHours() % 12;
            if (h === 0) h = 12;
            for (let s = 0; s < h; s++) {
                const t = curr.getTime() + s * 1000;
                if (t >= start && t < end) total++;
            }
        } else if (m === 30) {
            const t = curr.getTime();
            if (t >= start && t < end) total++;
        }
        curr.setMinutes(curr.getMinutes() + 30);
    }
    return total;
}