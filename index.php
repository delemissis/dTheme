<?php

get_header();

?>

<div class="wrapper light-theme" id="index-wrapper">

	<div class="container" id="content" tabindex="-1">

		<div class="row">

			<main class="site-main" id="main">

				<?php if ( have_posts() ) : ?>

					<?php /* Start the Loop */ ?>

					<?php while ( have_posts() ) : the_post(); ?>

                        <article <?php post_class(); ?> id="post-<?php the_ID(); ?>">

                            <header class="entry-header">

                                <?php
                                    the_title(
                                        sprintf( '<h2 class="entry-title"><a id="entry-title-link" class="light-theme" href="%s" rel="bookmark">', esc_url( get_permalink() ) ),
                                        '</a></h2>'
                                    );
                                ?>
                                                                        
                            </header><!-- .entry-header -->

                            <div class="entry-meta light-theme">

                                <?php the_author(); ?> | <?php the_date(); ?>    
                            
                            </div>

                            <div class="entry-content">

                                <?php the_content(); ?>

                            </div><!-- .entry-content -->

                        </article><!-- #post-## -->

					<?php endwhile; ?>

                <?php else : ?>
                    
                    <p> No posts to show!</p>
                    
				<?php endif; ?>

			</main><!-- #main -->

		</div><!-- .row -->

	</div><!-- #content -->

</div><!-- #index-wrapper -->

<?php get_footer();