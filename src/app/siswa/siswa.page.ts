import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { modalController } from '@ionic/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-siswa',
  templateUrl: './siswa.page.html',
  styleUrls: ['./siswa.page.scss'],
})
export class SiswaPage implements OnInit {

  constructor(public _apiService: ApiService, private modal: ModalController) {

  }
  dataSiswa: any = [];
  modal_tambah = false;
  id: any;
  nama: any;
  nilai_kehadiran: any;
  modal_edit = false;

  ngOnInit() {
    this.getSiswa();
  }
  getSiswa() {
    this._apiService.tampil('tampil_data.php').subscribe({
      next: (res: any) => {
        console.log('sukses', res);
        this.dataSiswa = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    })
  }

  reset_model() {
    this.id = null;
    this.nama = '';
    this.nilai_kehadiran = '';
  }
  open_modal_tambah(isOpen: boolean) {
    this.modal_tambah = isOpen;
    this.reset_model();
    this.modal_tambah = true;
    this.modal_edit = false;
  }
  cancel() {
    this.modal.dismiss();
    this.modal_tambah = false;
    this.modal_edit = false;
    this.reset_model();
  }
  tambahSiswa() {
    if (this.nama != '' && this.nilai_kehadiran != '') {
      let data = {
        nama: this.nama,
        nilai_kehadiran: this.nilai_kehadiran,
      }
      this._apiService.tambah(data, 'tambah_data.php')
        .subscribe({
          next: (hasil: any) => {
            this.reset_model();
            console.log('berhasil tambah Siswa');
            this.getSiswa();
            this.modal_tambah = false;
            this.modal.dismiss();
          },
          error: (err: any) => {
            console.log('gagal tambah Siswa');
          }
        })
    } else {
      console.log('gagal tambah Siswa karena masih ada data yg kosong');
    }
  }
  hapusSiswa(id: any) {
    this._apiService.hapus(id,
      '/hapus_data.php?id=').subscribe({
        next: (res: any) => {
          console.log('sukses', res);
          this.getSiswa();
          console.log('berhasil hapus data');
        },
        error: (error: any) => {
          console.log('gagal');
        }
      })
  }
  ambilSiswa(id: any) {
    this._apiService.lihat(id,
      '/lihat_data.php?id=').subscribe({
        next: (hasil: any) => {
          console.log('sukses', hasil);
          let siswa = hasil;
          this.id = siswa.id;
          this.nama = siswa.nama;
          this.nilai_kehadiran = siswa.nilai_kehadiran;
         
        },
        error: (error: any) => {
          console.log('gagal ambil data');
        }
      })
  }

  open_modal_edit(isOpen: boolean, idget: any) {
    this.modal_edit = isOpen;
    this.id = idget;
    console.log(this.id);
    this.ambilSiswa(this.id);
    this.modal_tambah = false;
    this.modal_edit = true;
  }
  editSiswa() {
    let data = {
      id: this.id,
      nama: this.nama,
      nilai_kehadiran: this.nilai_kehadiran
      
    }
    this._apiService.edit(data, '/edit_data.php')
      .subscribe({
        next: (hasil: any) => {
          console.log(hasil);
          this.reset_model();
          this.getSiswa();
          console.log('berhasil edit Siswa');
          this.modal_edit = false;
          this.modal.dismiss();
        },
        error: (err: any) => {
          console.log('gagal edit Siswa');
        }
      })
  }
}
