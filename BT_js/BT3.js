/**
 * Quy doi tien:
 * - Dau vao:
 * + mot_USD = 23.500 (VND)
 * + Nguoi_dung_nhap = 6 (USD)
 * 
 * - Xu ly:
 * + So_tien_doi_ra = Nguoi_dung_nhap * Mot_USD
 * 
 * - Dau ra:
 * => So_tien_doi_ra = ? VND
 * 
 */

// - Dau vao:
var mot_USD = 23.500 ;
var Nguoi_dung_nhap = 6 ;
// - Xu ly:
var So_tien_doi_ra = mot_USD * Nguoi_dung_nhap;
// - Dau ra:
console.log("So tien quy doi = "+So_tien_doi_ra+" VND");