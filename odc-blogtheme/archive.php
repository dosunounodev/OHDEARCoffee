<?php get_header(); ?>

<main>
  <div id="blog-content" class="blog-content">
  <?php
					the_archive_title( '<h1 class="post-title">', '</h1>' );
				?>


<?php 
      if ( have_posts() ) : 
          while ( have_posts() ) : the_post(); ?>
            <article class="blog-post">
              <div class="post-images-container">
                <div class="post-img-container">
                <?php the_post_thumbnail('small'); ?>
                </div>
                <div class="author-avatar">
                <?php 
     echo get_avatar( get_the_author_email(), '60' ); 
?>
                </div>
              </div>
              <h3 class="post-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
              <div class="post-data">
                <div class="author-name"><?php the_author(); ?></div>
                <div class="post-date"><?php the_time('F j, Y'); ?></div>
                <div class="post-category"><?php the_category(); ?></div>
                <div class="post-tags"><?php the_tags(' ',', ',' '); ?></div>
              </div>
              <div class="post-resume">
              <?php the_excerpt(); ?>
              </div>
              
              
              <a class="read-more rm-fp" href="<?php the_permalink(); ?>">SEGUIR LEYENDO</a>
            <div style="margin-bottom: 80px" class="comments-div"></div>
            </article>
        <?php endwhile; 

          else :

            ?>
          <div style="margin-top: 80px" class="error404-img-wrapper">
            <img src="<?php echo get_template_directory_uri()?>/assets/images/404.jpg" alt="">
          </div>
          <h3 class="error404-subtitle">No encontramos nada</h3>
          <a class="read-more" href="https://www.ohdearcoffee.com/blog/">VOLVER AL BLOG</a>

          <?php
          endif;  
      ?>
      <a class="read-more" href="https://www.ohdearcoffee.com/blog/">VOLVER AL BLOG</a>

  </div>
  <?php get_template_part('aside' ); ?>
</main>

<?php get_footer(); ?>