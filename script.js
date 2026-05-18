function filterProduk(kategori){
    let produk=document.getElementsByClassName("produk");
    for(let i=0;i<produk.length;i++){
        if(kategori=="all"){
            produk[i].style.display="block";
        }
        else if(produk[i].classList.contains(kategori)){
            produk[i].style.display="block";
        }
        else{
        produk[i].style.display="none";
        }
    }
}

function cariProduk(){
    let input=document.getElementById("searchInput").value.toLowerCase();
    let produk=document.getElementsByClassName("produk");
    for(let i=0;i<produk.length;i++){
        let teks=produk[i].innerText.toLowerCase();
        if(teks.includes(input)){
            produk[i].style.display="block";
        }
        else{
            produk[i].style.display="none";
        }
    }
}

function sortHarga(){
    let container=document.getElementById("produkContainer");
    let produk=[...document.getElementsByClassName("produk")];
    let tipe=document.getElementById("sortHarga").value;
    produk.sort(function(a,b){
        let hargaA=parseInt(a.dataset.harga);
        let hargaB=parseInt(b.dataset.harga);
            if(tipe=="asc"){
            return hargaA-hargaB;
            }
            else{
            return hargaB-hargaA;
            }
    });
    container.innerHTML="";
    produk.forEach(function(p){
    container.appendChild(p);
});

}


function openPopup(nama,deskripsi,harga,stok,rating){
    document.getElementById("popup").style.display="block";
    document.getElementById("popupNama").innerText=nama;
    document.getElementById("popupDeskripsi").innerText=deskripsi;
    document.getElementById("popupHarga").innerText="Harga : Rp"+harga;
    document.getElementById("popupStok").innerText="Stok : "+stok;
    document.getElementById("popupRating").innerText=rating;
}

function closePopup(){
    document.getElementById("popup").style.display="none";
}