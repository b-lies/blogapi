import React from "react";
import  { Fragment } from "react";



function Posts (props) {
    //CSS Styles
    var styles1 = {
        backgroundImage:`url(${process.env.PUBLIC_URL + '/assets/img/post-slide-1.jpg'})`,
    }
      var styles2 = {
        backgroundImage:`url(${process.env.PUBLIC_URL + '/assets/img/post-slide-2.jpg'})`,
      }
      var styles3={
        backgroundImage:`url(${process.env.PUBLIC_URL + 'assets/img/post-slide-3.jpg'})`,
      }
      var styles4 = {
        backgroundImage:`url(${process.env.PUBLIC_URL + 'assets/img/post-slide-4.jpg'})`,
      }

    //Posts data
    const { posts } = props;
    if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;
    return (
        <Fragment>
        <main id="main">
          <section id="hero-slider" className="hero-slider">
            <div className="container-md" data-aos="fade-in">
              <div className="row">
                <div className="col-12">
                  <div className="swiper sliderFeaturedPosts">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <a href="single-post.html" className="img-bg d-flex align-items-end" style={styles1}>
                          <div className="img-bg-inner">
                            <h2>The Best Homemade Masks for Face (keep the Pimples Away)</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.</p>
                          </div>
                        </a>
                      </div>

                      <div className="swiper-slide">
                        <a href="single-post.html" className="img-bg d-flex align-items-end" style={styles2}>
                          <div className="img-bg-inner">
                            <h2>17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.</p>
                          </div>
                        </a>
                      </div>

                      <div className="swiper-slide">
                        <a href="single-post.html" className="img-bg d-flex align-items-end" style= {styles3}>
                          <div className="img-bg-inner">
                            <h2>13 Amazing Poems from Shel Silverstein with Valuable Life Lessons</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.</p>
                          </div>
                        </a>
                      </div>

                      <div className="swiper-slide">
                        <a href="single-post.html" className="img-bg d-flex align-items-end" style={styles4}>
                          <div className="img-bg-inner">
                            <h2>9 Half-up/half-down Hairstyles for Long and Medium Hair</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="custom-swiper-button-next">
                      <span className="bi-chevron-right"></span>
                    </div>
                    <div className="custom-swiper-button-prev">
                      <span className="bi-chevron-left"></span>
                    </div>

                    <div className="swiper-pagination"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="posts" className="posts">
            <div className="container" data-aos="fade-up">
              <div className="row g-5">
                

                            {posts.map((post) => {
                                return (
                                    <div key={post.id} className="col-lg-4">
                                        <div className="post-entry-1 lg">
                                            <a href={post.slug}><img src="assets/img/post-landscape-1.jpg" alt="" className="img-fluid"/>
                                            </a>
                                            <div className="post-meta"><span className="date">{post.category}</span><span className="mx-1">{post.published}</span> <span>Jul 5th '22</span></div>
                                            <h2><a href={ post.slug}>{post.title}</a></h2>
                                            <p className="mb-4 d-block">{post.content.substr(0,200)}</p>

                                            <div className="d-flex align-items-center author">
                                                <div className="photo"><img src="assets/img/person-1.jpg" alt="" className="img-fluid" /></div>
                                                <div className="name">
                                                    <h3 className="m-0 p-0">{post.author}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                );
                            })}

              </div>
            </div>
          </section>


        </main>
    </Fragment>
        
	);
};
export default Posts;