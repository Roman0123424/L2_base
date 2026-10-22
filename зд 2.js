function ipv4Parser(ip, mask){
    const ipArr = ip.split('.');
    const maskArr = mask.split('.');
    const net = ipArr.map((octet, i) => octet & maskArr[i]).join('.');
    const host = ipArr.map((octet, i) => octet & ~maskArr[i]).join('.');
    return [net, host];
}