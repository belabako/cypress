
export function ModifyDate(month, d) {
    d.setMonth(d.getMonth() + month);
    var n = d.toString();
    return n;
}
