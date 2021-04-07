<aside id="blog-aside" class="blog-aside">
    <div class="aside-content">
      <div class="aside-frame frame-bio">
        <h2>Hola, amante del café</h2>
        <p>¿Sabías que preparar y compartir una taza de café es lo que más disfruto hacer?</p>
      </div>

      <div class="aside-frame frame-socials">
        <ul class="bar__socials-container">
        <li class="bar__socials-item"><a href="https://www.instagram.com/ohdearcoffee/" target="_blank"><i class="fab fa-instagram"></i></a></li>
        <li class="bar__socials-item"><a href="https://www.pinterest.at/ohdearcoffee_" target="_blank"><i class="fab fa-pinterest"></i></a></li>
        <li class="bar__socials-item"><a href="https://www.facebook.com/ohdearcoffee" target="_blank"><i class="fab fa-facebook"></i></a></li>
      </ul>
      </div>

      <div class="aside-frame frame-site">
        <h2><i class="fas fa-desktop"></i> Visita mi sitio...</h2>
        <p>Te espero en mi website <a href="https://ohdearcoffee.com" target="_blank">ohdearcoffee.com</a> donde podrás ver mis cursos, guías y mucho más</p>
      </div>

      <div class="aside-frame frame-cats">
        <ul>
          <li><img src="<?php echo get_template_directory_uri()?>/assets/icons/icon-fruit.svg" alt="">
          <a href="https://ohdearcoffee.com/wordpress/category/cultivo-y-procesos/">
          Cultivos y Procesos</a></li>
          <li><a href="https://ohdearcoffee.com/wordpress/category/tueste/">
          Tueste</a>
          <img src="<?php echo get_template_directory_uri()?>/assets/icons/icon-coffee.svg" alt="">
          </li>
          <li><img src="<?php echo get_template_directory_uri()?>/assets/icons/icon-barista.svg" alt="">
          <a href="https://ohdearcoffee.com/wordpress/category/barista/">
          Barista</a></li>
          <li><a href="https://ohdearcoffee.com/wordpress/category/recetas/">
          Recetas</a>
          <img src="<?php echo get_template_directory_uri()?>/assets/icons/icon-v60.svg" alt="">
          </li>
          <li><img src="<?php echo get_template_directory_uri()?>/assets/icons/icon-takeaway.svg" alt="">
          <a href="https://ohdearcoffee.com/wordpress/category/cafeterias/">
          Cafeterías</a></li>
        </ul>
      </div>



      <div class="aside-frame frame-widgets">
        <h2><i class="fas fa-search"></i> Buscar</h2>
        <?php dynamic_sidebar( 'asidewidget' ); ?>
      </div>

    </div>
  </aside>

