// object literal

const obj = {
    nama : "Ronald",
    umur : 17,
    ultah : function() {
        this.umur+=1
    }
}

// function declaration

function Mahasiswa(nama,umur) {
    let mahasiswa = {}

    mahasiswa.nama = nama;
    mahasiswa.umur = umur;

    mahasiswa.ultah = function() {
        this.umur+=1
    }

    return mahasiswa
}

let ronald = Mahasiswa("Ronald", 17);

// Object.create()

const Method = {
    ultah : function() {
        this.umur+=1
    }
}

function Siswa(nama,umur) {
    let siswa = Object.create(Method);

    siswa.nama = nama;
    siswa.umur = umur;

    return siswa;
}

let sandhika = Siswa('Sandhika', 17)


//constructor

function Siswa(nama,umur) {
    this.nama = nama
    this.umur = umur
}

let ikbal = new Siswa("Ikbal", 17)



// Prototype

function pekerja(nama,pekerja) {
    this.nama = nama
    this.pekerja = pekerja
}

pekerja.prototype.fName = function() {
    return this.nama + " " + this.pekerja
}

let andin = new pekerja("Andin", "Pemandu Sorak")