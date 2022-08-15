/**
 * Tinh tong 2 ky so:
 * - Dau vao:
 * Nhap: a = 69
 * 
 * - Xu ly:
 * lay so_hang_dv :  so_hang_dv = a % 10;
 * lay so_hang_chuc :  so_hang_chuc = Math.floor(a / 10);
 * Tong_hai_kyso = so_hang_dv + so_hang_chuc;
 * 
 * - Dau ra:
 * Tong_hai_kyso = ?
 */

// - Dau vao 
var a = 69;

// - Xu ly
var so_hang_dv = (a % 10);
// var so_hang_chuc = parseInt(a/10);
var so_hang_chuc = Math.floor(a/10)
var Tong_hai_kyso = so_hang_dv + so_hang_chuc;
console.log("Tong hai ky so = "+Tong_hai_kyso);

