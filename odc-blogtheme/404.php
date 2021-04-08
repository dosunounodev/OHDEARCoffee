<?php get_header(); ?>

<main>
  <div id="blog-content" class="blog-content">
    <div class="error404-container">
      <h2 class="error404-title">ERROR <span>404</span></h2>
      <div class="error404-img-wrapper">
        <img src="<?php echo get_template_directory_uri()?>/assets/images/404.jpg" alt="">
      </div>
      <h3 class="error404-subtitle">Algo salió mal</h3>
      <a class="read-more" href="https://www.ohdearcoffee.com/blog/">VOLVER AL BLOG</a>
    </div>
  </div>
  <?php get_template_part('aside' ); ?>
</main>

<?php get_footer(); ?>