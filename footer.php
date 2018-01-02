<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package _cheffism
 * @since 1.0.0
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="site-info">
			<a href="<?php echo esc_url( __( 'http://wordpress.org/', 'cheffism' ) ); ?>">
				<?php
					/* translators: Placeholder refers to the text WordPress */
					printf( esc_html__( 'Proudly powered by %s', 'cheffism' ), 'WordPress' );
				?>
			</a>
			<span class="sep"> | </span>
			<?php
				/* translators: Placeholders refer to the name of the theme, and a link to the theme author's site. */
				printf( esc_html__( 'Theme: %1$s by %2$s.', 'cheffism' ), 'cheffism', '<a href="http://jeffreydewit.com" rel="designer">Jeffrey de Wit</a>' );
			?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
