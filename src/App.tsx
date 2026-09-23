import React from "react";
import "./styles.css";
import myPhoto from "./Website Portfolio.png";
import bgImage from "./Background.png";
import BannerImage from "./AboutmeBanner.png";
import TiktokIcon from "./Tiktok icon.jpg";
import InstaIcon from "./Instagram icon.jpg";
import MyProject from "./MyProjectBanner.png";
import ContactMe from "./contactme.png";
import Myself from "./Myself.png";

export default function App() {
  const myProjects = [
    {
      title: "Speaktown : Lets Learn",
      description:
        "This is my first mini project me and my team made based on what we pick from our lecturer.",
      link: "https://drive.google.com/file/d/1soWlmSCYoWQAq1VTJbjuwuHJnyw9Q1H6/view?usp=drive_link",
      status: "See Progress",
    },
    {
      title: "Brew Story",
      description:
        "This is my final year project and made a collaboration with Wariscan and Kopi Saigon.",
      link: "#",
      status: " In Progress",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {/*NavBar*/}
      <nav style={styles.navbar}>
        {/* Ikon Media Sosial di Kiri */}
        <div style={styles.navIconsGroup}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            style={styles.navIcon}
          >
            <img src={InstaIcon} alt="Instagram" style={styles.AppIcon} />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noreferrer"
            style={styles.navIcon}
          >
            <img src={TiktokIcon} alt="Tiktok" style={styles.AppIcon} />
          </a>
        </div>

        {/* Menu Teks di Kanan */}
        <div style={styles.navLinksGroup}>
          <a href="#about" style={styles.navLink}>
            About Me
          </a>
          <a href="#projects" style={styles.navLink}>
            Project
          </a>
          <a href="#contact" style={styles.navLink}>
            Contact
          </a>
        </div>
      </nav>

      {/*Banner Lebar Penuh (Full-Width) */}
      <header style={styles.fullHeader}>
        <div style={styles.imageContainer}>
          <img src={myPhoto} alt="JAEMJAEMRA" style={styles.profileImg} />
        </div>
      </header>

      <div style={styles.container}>
        {/* About me Banner */}
        <div style={styles.aboutBanner}>
          <img src={BannerImage} alt="Banner" style={styles.profileImg} />
        </div>

        {/* Section About Me dengan 3 collumn*/}
        <section id="about" style={styles.aboutSection}>
          <div style={styles.magazineLayout}>
            {/* column Kiri: Myphoto */}
            <div style={styles.magazineImageContainer}>
              <img src={Myself} alt="Myself" style={styles.colProfileImg} />
            </div>

            {/* KOLOM KANAN: Semua Teks & Informasi (About, Skills, Journey) */}
            <div style={styles.magazineTextContainer}>
              {/* Bagian About Me */}
              <div style={styles.textBlock}>
                <h2 style={styles.editorialTitle}>about me</h2>
                <p style={styles.editorialText}>
                  My real name is Marsya Athirah Binti Noor Hisham, 20 years
                  old, staying in Gombak, and currently studying Information
                  Technology with a focus on Game Development at POLITEKNIK
                  METRO KUALA LUMPUR.
                </p>
              </div>

              {/* Bagian Skills & Journey (Disusun Berdampingan di Kanan) */}
              <div style={styles.rightSubGrid}>
                <div style={styles.textBlock}>
                  <h2 style={styles.editorialTitle}>skills</h2>

                  {/* Skill 1 : Microsoft*/}
                  <div style={styles.skillContainer}>
                    <span style={styles.skillName}>Microsoft Tools</span>
                    <div style={styles.progressBarBg}>
                      <div
                        style={{ ...styles.progressBarFill, width: "75%" }}
                      ></div>
                    </div>
                  </div>

                  {/* Skill 2 : Game Dev*/}
                  <div style={styles.skillContainer}>
                    <span style={styles.skillName}>Microsoft Tools</span>
                    <div style={styles.progressBarBg}>
                      <div
                        style={{ ...styles.progressBarFill, width: "75%" }}
                      ></div>
                    </div>
                  </div>

                  {/* Skill 3 : Progmming Java*/}
                  <div style={styles.skillContainer}>
                    <span style={styles.skillName}>Microsoft Tools</span>
                    <div style={styles.progressBarBg}>
                      <div
                        style={{ ...styles.progressBarFill, width: "75%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* How I love programming */}
                <div style={styles.collumnRight}>
                  <h2 style={styles.editorialTitle}>The Journey</h2>
                  <p style={styles.editorialSub}>
                    How I love programming & Development
                  </p>
                  <p style={styles.editorialText}>
                    My journey so far feels like it has its ups and downs, but I
                    still have plenty of time. Being young means nothing can
                    block me from achieving what I want. Whatever happens, I’ll
                    try my best—including pursuing things I love like dancing.
                    ✨
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MyProjectBanner*/}
        <div style={styles.aboutBanner}>
          <img src={MyProject} alt="Banner" style={styles.profileImg} />
        </div>

        {/* Bahagian 3 : Senarai Project */}
        <section id="projects" style={styles.section}>
          <div style={styles.projectGrid}>
            {myProjects.map((project, index) => (
              <div key={index} style={styles.projectCard}>
                <div
                  style={{
                    background: "#C28888",
                    height: "190px",
                    width: "100%",
                  }}
                ></div>
                <div style={{ padding: "12px" }}>
                  <h3 style={{ fontSize: "1rem", marginBottom: "5px" }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "#555" }}>
                    {project.description}
                  </p>

                  {/* Kondisi: Jika link '#' tampilkan teks biasa, jika ada link tampilkan tombol aktif */}
                  {project.link === "#" ? (
                    <span
                      style={{
                        display: "inline-block",
                        marginTop: "10px",
                        color: "#A68A8A",
                        fontStyle: "italic",
                        fontSize: "0.9rem",
                      }}
                    >
                      {project.status}
                    </span>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      style={styles.link}
                    >
                      {project.status}
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* Kotak Tambahan New Project */}
            <div
              style={{
                ...styles.projectCard,
                border: "2px dashed #D8A2A2",
                background: "transparent",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "180px",
                cursor: "pointer",
              }}
            >
              <span style={{ color: "#D8A2A2", fontWeight: "bold" }}>
                + New Project
              </span>
            </div>
          </div>
        </section>

        {/* Contactme*/}
        <div style={styles.aboutBanner}>
          <img src={ContactMe} alt="Banner" style={styles.profileImg} />
        </div>

        {/*Contact*/}
        <section id="contact" style={styles.section}>
          <p style={styles.text}>Contact me if anything.</p>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <a
              href="Email : Marsyaathirah651@gmail.com"
              style={styles.contactButton}
            >
              Send Me an Email
            </a>
          </div>
        </section>

        {/* Penutup / Footer */}
        <footer style={styles.footer}>
          <p>Thanks for visiting my personal space! ✨</p>
        </footer>
      </div>
    </div>
  );
}

// Gaya hiasan CSS
const styles = {
  fullHeader: {
    width: "100%",
    marginBottom: "30px",
  },
  imageContainer: {
    width: "100%",
    maxHeight: "750px",
    overflow: "hidden",
  },
  profileImg: {
    width: "100%",
    height: "auto",
    display: "block",
    objectFit: "cover",
  },
  aboutBanner: {
    width: "100%", // Lebar penuh mengikuti kotak kontainer (800px)
    maxHeight: "150px", // Atur tinggi maksimal banner di sini (bisa diubah angkanya)
    overflow: "hidden", // Mencegah gambar keluar dari kotak
    borderRadius: "12px", // Melengkungkan sudut banner jika diinginkan
    marginBottom: "20px", // Jarak antara banner dan teks di bawahnya
  },
  aboutSection: {
    marginBottom: "40px",
    background: "transparent", // Menghilangkan kotak warna kuning pekat supaya lebih bersih ala majalah
    padding: "30px 0px",
    width: "100%",
  },
  magazineLayout: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1.8fr", // Membahagi kepada 3 kolom sama besar
    gap: "40px",
    alignItems: "start",
  },
  magazineImageContainer: {
    width: "100%",
  },
  columnLeft: {
    width: "100%",
  },
  colProfileImg: {
    width: "600px",
    height: "auto",
    objectFit: "cover",
  },
  magazineTextContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  rightSubGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr", // Membagi bagian bawah kanan menjadi 2 kolom (Skills dan Journey)
    gap: "20px",
  },
  textBlock: {
    display: "flex",
    flexDirection: "column",
  },
  skillContainer: {
    marginBottom: "12px",
  },
  skillName: {
    fontFamily: "EB Garamond, serif",
    fontSize: "0.9rem",
    color: "#555555",
    display: "block",
    marginBottom: "4px",
  },
  progressBarBg: {
    width: "100%",
    height: "8px",
    backgroundColor: "#E5D0D0", // Warna latar belakang bar yang kosong (pastel soft pink)
    borderRadius: "4px",
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#4A3B32", // Warna bar yang diisi (coklat gelap estetik ala majalah)
    borderRadius: "4px",
  },
  editorialTitle: {
    fontFamily: "EB Garamond, serif",
    fontStyle: "italic",
    fontSize: "1.8rem",
    color: "#4A3B32",
    marginBottom: "5px",
    fontWeight: "normal",
  },
  editorialSub: {
    fontFamily: "EB Garamond, serif",
    fontSize: "1rem",
    color: "#8C6A6A",
    marginBottom: "15px",
    fontStyle: "italic",
  },
  editorialText: {
    fontFamily: "EB Garamond, serif",
    fontSize: "1rem",
    color: "#555555",
    lineHeight: "1.7",
  },
  skillList: {
    fontFamily: "EB Garamond, serif",
    fontSize: "0.95rem",
    color: "#555555",
    paddingLeft: "20px",
    lineHeight: "1.6",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 30px",
    marginBottom: "30px",
    backdropFilter: "blur(20px)", // Efek blur kaca yang cantik
    borderBottom: "1px solid #E5D0D0",
  },
  navLinksGroup: {
    display: "flex",
    gap: "35px",
  },
  navIconsGroup: {
    display: "flex",
    gap: "20px", // Jarak antara ikon media sosial
    alignItems: "center",
  },
  navLink: {
    textDecoration: "none",
    color: "#8EA66B",
    fontFamily: "EB Garamond, serif", // Fon gaya klasik ala majalah
    fontSize: "1.2rem ",
    letterSpacing: "3px",
    transition: "color 0.3s",
  },
  navIcon: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
  },
  AppIcon: {
    width: "50px",
    height: "50px",
    objectFit: "cover",
    borderRadius: "50%",
  },

  container: {
    fontFamily: "EB Garamond",
    padding: "0 20px 20px 20px",
    maxWidth: "1100px",
    margin: "0 auto",
    color: "#333",
    lineHeight: "1.6",
  },
  section: {
    marginBottom: "30px",
    background: "#FFF9D6",
    padding: "20px",
    borderRadius: "19px",
  },
  text: {
    fontSize: "1rem",
    color: "#4b5563",
  },
  projectGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "15px",
    marginTop: "15px",
  },
  projectCard: {
    background: "#FFDCDC",
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "180px",
  },
  link: {
    display: "inline-block",
    marginTop: "10px",
    color: "#D8A2A2",
    textDecoration: "none",
    fontWeight: "bold",
  },
  footer: {
    textAlign: "center",
    marginTop: "40px",
    color: "#666",
    borderTop: "1px solid #e5e7eb",
    paddingTop: "20px",
  },
};
