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
      endif; 
      ?>

  </div>
  <?php get_template_part('aside' ); ?>
</main>

<?php get_footer(); ?>