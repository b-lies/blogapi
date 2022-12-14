import React,{ useState, useEffect  } from 'react';
import axiosInstance from '../Axios';
import { useParams } from 'react-router-dom'


export default function SinglePost() {
	const { slug } = useParams();

	const [data, setData] = useState({ posts: [] });

	useEffect(() => {
		axiosInstance.get(slug).then((res) => {
			setData({ posts: res.data });
			console.log(res.data);
		});
	}, [slug]);
  return (
   
            <main id="main">
                <section className="single-post-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 post-content" data-aos="fade-up">

                            
                                <div className="single-post">
                                <div className="post-meta"><span className="date">{data.posts.category}</span> <span className="mx-1">& bullet;</span> <span>{data.posts.published}</span></div>
                                <h1 className="mb-5">{data.posts.title}</h1>
                                <p><span className="firstcharacter">L</span>orem ipsum dolor sit, amet consectetur adipisicing elit. Ratione officia sed, suscipit distinctio, numquam omnis quo fuga ipsam quis inventore voluptatum recusandae culpa, unde doloribus saepe labore alias voluptate expedita? Dicta delectus beatae explicabo odio voluptatibus quas, saepe qui aperiam autem obcaecati, illo et! Incidunt voluptas culpa neque repellat sint, accusamus beatae, cumque autem tempore quisquam quam eligendi harum debitis.</p>
                                <img src="assets/img/post-landscape-1.jpg" alt="" className="img-fluid"/>
                                <figure className="my-4">
                                  
                                    <figcaption>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, odit? </figcaption>
                                </figure>
                                <p>{data.posts.content}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </main>

  )
}
