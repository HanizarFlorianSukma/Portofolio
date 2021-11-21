
let btnAktivitas = document.querySelector('#btnAktivitas');
let btnPengumuman = document.querySelector('#btnPengumuman');
let btnTugas = document.querySelector('#btnTugas');
let btnDaftarMahasiswa = document.querySelector('#btnDaftarMahasiswa');
let btnRekap = document.querySelector('#btnRekap');

let content = document.querySelector("#content");
let isi = document.getElementById('konten');

btnAktivitas.addEventListener('click', () => {
    isi.innerHTML = ` 
    <!-- CARD CONTENT 1 -->
          <div class="card content-custom rounded-4 shadow mt-2" style="max-width: 1450px;">
              <div class="row ms-2 mb-4 text-content-custom ">
                  <div class="col-1" style=" margin-top: 25px;" >
                      <h2><i class="fas fa-chalkboard-teacher" style="color: #42A5F6;"></i></h2>
                  </div>
                  <div class="col text-content-judul" style="margin-top: 30px;">
                      <h4>Pertemuan ke-1</h4>
                  </div>
              </div>

              <div class="row ms-2 mb-4 text-content-custom">
                  <div class="col-1" style="margin-top: -20px;">
                      <h3><i class="fas fa-file-pdf" style="color:#FF5722;"></i></h3>
                  </div>
                  <div class="col" style="margin-bottom: 5px;">
                      <h6 class="text-content">Rencana Pembelajaran Semester (RPS)</h6>
                  </div>
              </div>
          </div>
          <!-- END OF CARD CONTENT -->

          <!-- CARD CONTENT 2 -->
          <div class="card content-custom rounded-4 shadow mt-4" style="max-width: 1450px;">
            <div class="row ms-2 mb-4 text-content-custom">
                <div class="col-1" style=" margin-top: 25px;" >
                    <h2><i class="fas fa-chalkboard-teacher" style="color: #42A5F6;"></i></h2>
                </div>
                <div class="col text-content-judul" style="margin-top: 30px;">
                    <h4>Pertemuan ke-2</h4>
                </div>
            </div>

            <div class="row ms-2 mb-4 text-content-custom">
                <div class="col-1" style="margin-top: -20px;">
                    <h3><i class="fas fa-external-link-alt" style="color:#FF5722;"></i></h3>
                </div>
                <div class="col" style="margin-bottom: 5px;">
                    <h6 class="text-content">Video Perkuliahan 1 - Pengenalan Multimedia Dasar</h6>
                </div>
            </div>
            
            <div class="row ms-2 mb-4 text-content-custom">
              <div class="col-1" style="margin-top: -20px;">
                  <h3><i class="fas fa-file-pdf" style="color:#FF5722;"></i></h3>
              </div>
              <div class="col" style="margin-bottom: 5px;">
                  <h6 class="text-content">Tugas Harian 1</h6>
              </div>
          </div>
            
            
        </div>
        <!-- END OF CARD CONTENT -->

        <!-- CARD CONTENT 3 -->
        <div class="card content-custom rounded-4 shadow mt-4" style="max-width: 1450px;">
          <div class="row ms-2 mb-4 text-content-custom">
              <div class="col-1" style=" margin-top: 25px;" >
                  <h2><i class="fas fa-chalkboard-teacher" style="color: #42A5F6;"></i></h2>
              </div>
              <div class="col text-content-judul" style="margin-top: 30px;">
                  <h4>Pertemuan ke-3</h4>
              </div>
          </div>

          <div class="row ms-2 mb-4 text-content-custom">
              <div class="col-1" style="margin-top: -20px;">
                  <h3><i class="fas fa-file-pdf" style="color:#FF5722;"></i></h3>
              </div>
              <div class="col" style="margin-bottom: 5px;">
                  <h6 class="text-content">Tugas Harian 2</h6>
              </div>
          </div>
      </div>
      <!-- END OF CARD CONTENT -->

      <!-- CARD CONTENT 4 -->
      <div class="card content-custom rounded-4 shadow mt-4" style="max-width: 1450px;">
        <div class="row ms-2 mb-4 text-content-custom">
            <div class="col-1" style=" margin-top: 25px;" >
                <h2><i class="fas fa-chalkboard-teacher" style="color: #42A5F6;"></i></h2>
            </div>
            <div class="col text-content-judul" style="margin-top: 30px;">
                <h4>Pertemuan ke-4</h4>
            </div>
        </div> 
    </div>
    <!-- END OF CARD CONTENT -->                              
    ` ;
});

btnPengumuman.addEventListener('click', () => {
        isi.innerHTML = `                                     
        <div class="card car card-custom rounded-4 shadow mt-2" style="max-width: 1450px; margin-bottom: 40px;">
                                <div class="row ms-2 mb-5 text-content-custom icon-pengumuman">
                                <div class="col-1 icon-pengumuman" style="margin-top: 25px;" >
                                    <h2><i class="fas fa-exclamation-circle " style="color: #42A5F6;"></i></h2>
                                </div>

                                <div class="col pengumuman-custom">
                                    <h4 class="text-content-judul">Pengumuman</h3>
                                </div>
                                
                                <p><i class="far fa-file" style=" color: #42A5F6;"></i></p>

                                
                                <h5 class="text-content"> Belum ada pengumuman <br>
                                  yang diposting
                              </h5>
                                </div>             
    ` ;
});

btnTugas.addEventListener('click', () => {
        isi.innerHTML = `
        <div class="col container-fluid rounded-4 shadow card card-custom mt-2 ms-2" style="max-width: 1450px;">
                  <!-- CARD CONTENT 1 -->
                  <div class="mt-4">
                    <div class="row mt-2 mb-3">
                      <div class="col-1 text-center ms-3">
                        <h2><i class="fas fa-tasks text-info-custom"></i></h2>
                      </div>
                      <div class="col-9 daftar-tgs" style="margin-top: 5px;">
                        <h4 style="font-family: Poppins; ">Daftar Tugas</h3>
                      </div>
                    </div>


                      <div class="container-fluid">
                        <div class="row">
                          <div class="col-md-1">
                            <div class="judul-tugas">
                              <h3 class="h3"><i class="fas fa-file-word mt-2 text-info-custom word-icon"></i></h3>
                            </div>
                          </div>
                          <div class="col-md-5">
                             <!-- JUDUL TUGAS -->
                             <h5 class="stext-content-judul">Tugas Harian 1 - Pilihan Ganda</h5>
                             <!-- CHECKBOX -->
                             <div class="form-check" style="margin-top: -10px;">
                               <input class="form-check-input" type="checkbox" id="flexCheckDefault">
                               <label class="form-check-label text-content ">
                                 Mark As Done
                               </label>
                             </div>
                          </div>
                          <div class="col-md-3">
                            <div class="row">
                              <div class="col-1 me-2">
                                <h2> <i class="far fa-calendar-alt text-info-custom" ></i></h2>
                              </div>
                              <div class="col-8">
                                <h6 class="text-content date">Posted <br> 20 Agustus 2021</h6>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-3">
                            <div class="row">
                              <div class="col-1 me-2">
                                <h2> <i class="far fa-calendar-alt text-info-custom" ></i></h2>
                              </div>
                              <div class="col-8">
                                <h6 class="text-content date">Posted <br> 20 Agustus 2021</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <hr class="line mt-4 mb-4">
                      </div>
                      <div class="container-fluid">
                        <div class="row">
                          <div class="col-md-1">
                            <div class="judul-tugas">
                              <h3 class="h3"><i class="fas fa-file-word mt-2 text-info-custom word-icon"></i></h3>
                            </div>
                          </div>
                          <div class="col-md-5">
                             <!-- JUDUL TUGAS -->
                             <h5 class="stext-content-judul">Tugas Harian 2 - Essay</h5>
                             <!-- CHECKBOX -->
                             <div class="form-check" style="margin-top: -10px;">
                               <input class="form-check-input" type="checkbox" id="flexCheckDefault">
                               <label class="form-check-label text-content ">
                                 Mark As Done
                               </label>
                             </div>
                          </div>
                          <div class="col-md-3">
                            <div class="row">
                              <div class="col-1 me-2">
                                <h2> <i class="far fa-calendar-alt text-info-custom" ></i></h2>
                              </div>
                              <div class="col-8">
                                <h6 class="text-content date">Posted <br> 3 September 2021</h6>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-3">
                            <div class="row">
                              <div class="col-1 me-2">
                                <h2> <i class="far fa-calendar-alt text-info-custom" ></i></h2>
                              </div>
                              <div class="col-8">
                                <h6 class="text-content date">Posted <br> 5 September 2021</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <hr class="line mt-4 mb-4">
                      </div>
                      <!-- batas tugas -->
                  </div>
                  
                  <!-- END OF CARD CONTENT -->
                </div>                   
    ` ;
});


btnRekap.addEventListener('click', () => {
        isi.innerHTML = `                                       
        <div class="row mb-5">
                <div class="col rounded-4 shadow card card-custom mt-2 ms-3" style="max-width: 1450px;">
                  <div class="container-fluid">
                    <div class="row">
                      <di class="col-md-6">
                        <div class="card-body">
                          <div class="row mb-5 mt-3">
                            <div class="col-1">
                              <i class="h3 text-info-custom fas fa-chart-line"></i>                              
                            </div>
                            <div class="col">
                              <span class="h4">Rekap Dan Kehadiran</span>
                            </div>
                          </div>
                          <div class="row mt-2 text-content-judul">
                            <h1>30%</h1>
                          </div>
                          <div class="row">
                            <div class="col">
                              <div class="progress">
                                <div class="progress-bar" style="width: 30%;" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                          <div class="row mt-3">
                            <div class="col-3">
                              <span class="small text-info-custom rounded-3" style="background-color:#42A5F6;  padding: 1.5px 25px;">
                              </span>
                            </div>
                            <div class="col-7">
                              <span">Hadir</span>
                            </div>
                            <span class="col-2">
                              4 x
                            </span>
                          </div>
                          <div class="row mt-3">
                            <div class="col-3">
                              <span class="small text-warning rounded-3" style="background-color: #FFD427; padding: 1.5px 25px;">
                              </span>
                            </div>
                            <div class="col-7">
                              <span>Sakit</span>
                            </div>
                            <span class="col-2">
                              0 x
                            </span>
                          </div>
                          <div class="row mt-3">
                            <div class="col-3">
                              <span class="small rounded-3" style="background-color: #FB8500;  padding: 1.5px 25px;">
                              </span>
                            </div>
                            <div class="col-7">
                              <span>Izin</span>
                            </div>
                            <span class="col-2">
                              0 x
                            </span>
                          </div>
                          <div class="row mt-3">
                            <div class="col-3">
                              <span class="small text-danger rounded-3" style="background-color: #F0524F; padding: 1.5px 25px;">
                              </span>
                            </div>
                            <div class="col-7">
                              <span>Alpha</span>
                            </div>
                            <span class="col-2">
                              0 x
                            </span>
                          </div>
                          <div class="row mt-4">
                            <div class="row mb-2 margin-tugas" >
                              <div class="col-9">
                                <h6>Pertemuan 1</h6>
                              </div>
                              <div class="col-3">
                                <div class="row">
                                  <div class="circle" style="background-color:#42A5F6;">
                                     H
                                  </div>
                                </div>                                
                              </div>
                            </div>
                            <div class="row">
                              <hr class="col-10">
                            </div>
                            <div class="row mb-2 margin-tugas" >
                              <div class="col-9">
                                <h6>Pertemuan 2</h6>
                              </div>
                              <div class="col-3">
                                <div class="row">
                                  <div class="circle" style="background-color: #FB8500;">
                                      I
                                  </div>
                                </div>                                
                              </div>
                            </div>
                            <div class="row">
                              <hr class="col-10">
                            </div>
                            <div class="row mb-2 margin-tugas" >
                              <div class="col-9">
                                <h6>Pertemuan 3</h6>
                              </div>
                              <div class="col-3">
                                <div class="row">
                                  <div class="circle" style="background-color: #F0524F;">
                                    A
                                  </div>
                                </div>                                
                              </div>
                            </div>
                            <div class="row">
                              <hr class="col-10">
                            </div>
                            <div class="row mb-2 margin-tugas" >
                              <div class="col-9">
                                <h6>Pertemuan 4</h6>
                              </div>
                              <div class="col-3">
                                <div class="row">
                                  <div class="circle">
                                    H
                                  </div>
                                </div>                                
                              </div>
                            </div>
                            <div class="row">
                              <hr class="col-10">
                            </div>
                            <div class="row mb-2 margin-tugas" >
                              <div class="col-9">
                                <h6>Pertemuan 5</h6>
                              </div>
                              <div class="col-3">
                                <div class="row">
                                  <div class="circle" style="background-color:#42A5F6;">
                                    H
                                  </div>
                                </div>                                
                              </div>
                            </div>
                            <div class="row">
                              <hr class="col-10">
                            </div>
                            <div class="row mb-2 margin-tugas" >
                              <div class="col-9">
                                <h6>Pertemuan 6</h6>
                              </div>
                              <div class="col-3">
                                <div class="row">
                                  <div class="circle bg-secondary">
                                    -
                                  </div>
                                </div>                                
                              </div>
                            </div>
                            <div class="row">
                              <hr class="col-10">
                            </div>
                            <div class="row mb-2 margin-tugas" >
                              <div class="col-9">
                                <h6>Pertemuan 7</h6>
                              </div>
                              <div class="col-3">
                                <div class="row">
                                  <div class="circle bg-secondary">
                                    -
                                  </div>
                                </div>                                
                              </div>
                            </div>
                          </div>

                        </div>
                      </di>
                      <div class="col-md-6">
                        <div class="card-body">
                          <div class="row" >
                            <div class="col-10">
                              <canvas id="myChart" width="500" height="450px"></canvas>
                            </div>
                          </div>
                          <div class="row mt-5">
                            <div class="row mb-2" >
                              <div class="col-9">
                                <h6>Tugas 1</h6>
                              </div>
                              <div class="col-3">
                                <span><b>90</b></span>
                              </div>
                            </div>
                            <div class="row">
                              <hr class="col-10">
                            </div>
                            <div class="row mb-2" >
                              <div class="col-9">
                                <h6>Tugas 2</h6>
                              </div>
                              <div class="col-3">
                                <span><b>90</b></span>
                              </div>
                            </div>
                            <div class="row">
                              <hr class="col-10">
                            </div>
                            <div class="row mb-2" >
                              <div class="col-9">
                                <h6>Tugas 3</h6>
                              </div>
                              <div class="col-3">
                                <span><b>90</b></span>
                              </div>
                            </div>
                            <div class="row">
                              <hr class="col-10">
                            </div>
                            <div class="row mb-2" >
                              <div class="col-9">
                                <h6>Responsi 1</h6>
                              </div>
                              <div class="col-3">
                                <span><b>90</b></span>
                              </div>
                            </div>
                            <div class="row">
                              <hr class="col-10">
                            </div>
                            <div class="row mb-2" >
                              <div class="col-9">
                                <h6>Tugas 4</h6>
                              </div>
                              <div class="col-3">
                                <span><b> - </b></span>
                              </div>
                            </div>
                            <div class="row">
                              <hr class="col-10">
                            </div>
                            <div class="row mb-2" >
                              <div class="col-9">
                                <h6>UTS</h6>
                              </div>
                              <div class="col-3">
                                <span><b> - </b></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    

    ` ;
    const ctx = document.getElementById('myChart').getContext('2d')
    const blueColor = '#42A5F6'
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Nilai A', 'Nilali B', 'Nilai C', 'Nlai E'],
            datasets: [{
                label: 'Persentase',
                data: [80, 20, 0, 0],
                backgroundColor: [
                    blueColor,
                    blueColor,
                    blueColor,
                    blueColor,                      
                ],
                borderColor: [
                    blueColor,
                    blueColor,
                    blueColor,
                    blueColor,
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    suggestedMax: 100  
              
                }
            }
        }
    })
});

btnDaftarMahasiswa.addEventListener('click', () => {
        isi.innerHTML = `                                     
        <div class="card mt-2 card-custom card-custom-content rounded-4 shadow" style="max-width: 1450px;">
                            <div class="row ms-2 mb-4 text-content-custom">
                                <div class="col-1">
                                    <h2><i class="fas fa-users" style="color: #42A5F6;"></i></h2>
                                </div>
                                <div class="col">
                                    <h4 class="text-content-judul">Daftar Mahasiswa</h3>
                                </div>
                            </div>


                            <div class="row ms-2 mb-4 text-content-custom-daftar">
                                <div class="col-1">
                                    <h3><i class="fas fa-user-circle" style="color:#666666;"></i></h3>
                                </div>
                                <div class="col">
                                    <h5 class="text-content">5200411001 - Bagas Rangga Rajasa</h5>
                                    <h6 class="text-content">5200411001 - Bagas Rangga Rajasa</h6>
                                </div>
                            </div>

                            <div class="row ms-2 mb-4 text-content-custom-daftar">
                              <div class="col-1">
                                  <h3><i class="fas fa-user-circle" style="color:#666666;"></i></h3>
                              </div>
                              <div class="col">
                                  <h5 class="text-content">5200411002 - Bayu Prasetyo</h5>
                                  <h6 class="text-content">5200411002 - Bayu Prasetyo</h6>
                              </div>
                          </div>

                          <div class="row ms-2 mb-4 text-content-custom-daftar">
                            <div class="col-1">
                                <h3><i class="fas fa-user-circle" style="color:#666666;"></i></h3>
                            </div>
                            <div class="col">
                                <h5 class="text-content">5200411003 - Hanizar Florian Sukma</h5>
                                <h6 class="text-content">5200411003 - Hanizar Florian Sukma</h6>
                            </div>
                        </div>

                        <div class="row ms-2 mb-4 text-content-custom-daftar">
                          <div class="col-1">
                              <h3><i class="fas fa-user-circle" style="color:#666666;"></i></h3>
                          </div>
                          <div class="col">
                              <h5 class="text-content">5200411001 - Florian Sukma</h5>
                              <h6 class="text-content">5200411001 - Florian Sukma</h6>
                          </div>
                      </div>

                      <div class="row ms-2 mb-4 text-content-custom-daftar">
                        <div class="col-1">
                            <h3><i class="fas fa-user-circle" style="color:#666666;"></i></h3>
                        </div>
                        <div class="col">
                            <h5 class="text-content">5200411001 - Rangga Rajasa</h5>
                            <h6 class="text-content">5200411001 - Rangga Rajasa</h6>
                        </div>
                    </div>
    ` ;
});

window.addEventListener('load', () => {
  isi.innerHTML = `
  <div class="card content-custom rounded-4 shadow mt-4" style="max-width: 1450px;">
  <div class="row ms-2 mb-4 text-content-custom">
      <div class="col-1" style=" margin-top: 25px;" >
          <h2><i class="fas fa-chalkboard-teacher" style="color: #42A5F6;"></i></h2>
      </div>
      <div class="col text-content-judul" style="margin-top: 30px;">
          <h4>Pertemuan ke-1</h4>
      </div>
  </div>

  <div class="row ms-2 mb-4 text-content-custom">
      <div class="col-1" style="margin-top: -20px;">
          <h3><i class="fas fa-file-pdf" style="color:#FF5722;"></i></h3>
      </div>
      <div class="col" style="margin-bottom: 5px;">
          <h6 class="text-content">Rencana Pembelajaran Semester (RPS)</h6>
      </div>
  </div>
</div>
<!-- END OF CARD CONTENT -->

<!-- CARD CONTENT 2 -->
<div class="card content-custom rounded-4 shadow mt-4" style="max-width: 1450px;">
<div class="row ms-2 mb-4 text-content-custom">
    <div class="col-1" style=" margin-top: 25px;" >
        <h2><i class="fas fa-chalkboard-teacher" style="color: #42A5F6;"></i></h2>
    </div>
    <div class="col text-content-judul" style="margin-top: 30px;">
        <h4>Pertemuan ke-2</h4>
    </div>
</div>

<div class="row ms-2 mb-4 text-content-custom">
    <div class="col-1" style="margin-top: -20px;">
        <h3><i class="fas fa-external-link-alt" style="color:#FF5722;"></i></h3>
    </div>
    <div class="col" style="margin-bottom: 5px;">
        <h6 class="text-content">Video Perkuliahan 1 - Pengenalan Multimedia Dasar</h6>
    </div>
</div>

<div class="row ms-2 mb-4 text-content-custom">
  <div class="col-1" style="margin-top: -20px;">
      <h3><i class="fas fa-file-pdf" style="color:#FF5722;"></i></h3>
  </div>
  <div class="col" style="margin-bottom: 5px;">
      <h6 class="text-content">Tugas Harian 1</h6>
  </div>
</div>


</div>
<!-- END OF CARD CONTENT -->

<!-- CARD CONTENT 3 -->
<div class="card content-custom rounded-4 shadow mt-4" style="max-width: 1450px;">
<div class="row ms-2 mb-4 text-content-custom">
  <div class="col-1" style=" margin-top: 25px;" >
      <h2><i class="fas fa-chalkboard-teacher" style="color: #42A5F6;"></i></h2>
  </div>
  <div class="col text-content-judul" style="margin-top: 30px;">
      <h4>Pertemuan ke-3</h4>
  </div>
</div>

<div class="row ms-2 mb-4 text-content-custom">
  <div class="col-1" style="margin-top: -20px;">
      <h3><i class="fas fa-file-pdf" style="color:#FF5722;"></i></h3>
  </div>
  <div class="col" style="margin-bottom: 5px;">
      <h6 class="text-content">Tugas Harian 2</h6>
  </div>
</div>
</div>
<!-- END OF CARD CONTENT -->

<!-- CARD CONTENT 4 -->
<div class="card content-custom rounded-4 shadow mt-4" style="max-width: 1450px;">
<div class="row ms-2 mb-4 text-content-custom">
<div class="col-1" style=" margin-top: 25px;" >
    <h2><i class="fas fa-chalkboard-teacher" style="color: #42A5F6;"></i></h2>
</div>
<div class="col text-content-judul" style="margin-top: 30px;">
    <h4>Pertemuan ke-4</h4>
</div>
</div> 
</div>
<!-- END OF CARD CONTENT -->
  `
})