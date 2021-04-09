<?php get_header(); ?>

<main>
  <div id="blog-content" class="blog-content">
  <h1 class="post-title">
					<?php _e( 'Resultados de: ', 'twentynineteen' ); ?>
					<span class="page-description"><?php echo get_search_query(); ?></span>
				</h1>


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
              <div class="post-content">
              <?php the_content(); ?>
              </div>
            </article>

            <?php if ( comments_open() || get_comments_number() ) {
					comments_template();
				}?>
        <div class="comments-div"></div>
        <a class="read-more" href="https://www.ohdearcoffee.com/blog/">VOLVER AL BLOG</a>
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

  </div>
  <?php get_template_part('aside' ); ?>
</main>

<?php get_footer(); ?>