import React, { useState } from 'react';
import './Blog.css';
import Navbar from './Navbar';

const Blog = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showLatestPost, setShowLatestPost] = useState(false);
  const [showArticle, setShowArticle] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [subscriptionMessage, setSubscriptionMessage] = useState('');

  const toggleTerms = () => setShowTerms(!showTerms);
  const toggleLatestPost = () => setShowLatestPost(!showLatestPost);
  const toggleArticle = () => setShowArticle(!showArticle);
  const toggleContactForm = () => setShowContactForm(!showContactForm);

  const handleSubscribe = (event) => {
    event.preventDefault();
    setSubscriptionMessage('You have successfully subscribed to our newsletter!');
    setTimeout(() => {
      setSubscriptionMessage(''); 
    }, 5000);
  };

  return (
    <div className="blog-container">
      <div className="content">
        <Navbar />
        <h1>Our Blog</h1>

       
        {subscriptionMessage && (
          <div className="subscription-notification">
            {subscriptionMessage}
          </div>
        )}

        <section className="latest-posts">
          <h2>Latest Posts</h2>
          <div className="post">
            <img src="https://tse4.mm.bing.net/th?id=OIP.yQPxooT-fJohHthFXhOTEgAAAA&pid=Api&P=0&h=180" alt="Latest Post" />
            <div className="post-content">
              <h3>Creating Cozy Spaces</h3>
              <p>Learn how to transform your home into a cozy haven with these simple tips...</p>
              <button onClick={toggleLatestPost} className="read-more-btn">
                {showLatestPost ? 'Show Less' : 'Read More'}
              </button>
              {showLatestPost && (
                <div className="additional-info">
                  <p>
                  Use Warm Colors and Textures: Incorporate warm tones and soft, plush fabrics to create a welcoming atmosphere.
                  Layer Lighting: Mix ambient, task, and accent lighting to add depth and warmth to your space.
                  Add Natural Elements: Bring in plants and wooden furniture to introduce warmth and a touch of nature.
                  Personalize Your Space: Use meaningful decor and artwork to make your home feel uniquely yours.</p>

                </div>
              )}
            </div>
          </div>
        </section>

        <section className="articles-news">
          <h2>Articles & News</h2>
          <div className="article">
            <img src="https://tse2.mm.bing.net/th?id=OIP.dlMNRSSywrWPF00_veGp5AAAAA&pid=Api&P=0&h=180" alt="Article" />
            <div className="article-content">
              <h3>Interior Design Trends 2024</h3>
              <p>Stay ahead of the curve with the latest trends in interior design for 2024...</p>
              <button onClick={toggleArticle} className="read-more-btn">
                {showArticle ? 'Show Less' : 'Read More'}
              </button>
              {showArticle && (
                <div className="additional-info">
                  <p>Vibrant Color Palettes:

Embrace bold and vibrant colors like deep blues, rich greens, and warm terracottas.
Pair with neutral tones to balance the boldness and create a cohesive look.
Multifunctional Furniture:
Opt for furniture pieces that serve multiple purposes, such as storage ottomans and extendable tables.
Focus on practicality without compromising on style.
</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="awards">
          <h2>Awards</h2>
          <p>We are proud to announce that our company has won the "Best Interior Design Blog 2024" award. This accolade is a testament to our commitment to bringing the best in home decor and design.</p>
        </section>

        <section className="ratings">
          <h2>Our Ratings</h2>
          <div className="stars">
            <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
          </div>
          <p>Rated 5 stars by our valued customers</p>
        </section>

        <section className="newsletter">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get the latest tips, trends, and updates directly in your inbox. Sign up for our newsletter today!</p>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </section>

        <section className="contact">
          <h2>Contact Us</h2>
          <p>If you have any questions or need personalized design advice, feel free to get in touch with us.</p>
          <button onClick={toggleContactForm} className="contact-btn">
            {showContactForm ? 'Hide Contact Form' : 'Show Contact Form'}
          </button>
          {showContactForm && (
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="4" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          )}
        </section>

        <section className="terms-conditions">
          <h2>Terms & Conditions</h2>
          <p>By accessing and using this website, you agree to the following terms and conditions...</p>
          <button onClick={toggleTerms} className="terms-btn">
            {showTerms ? 'Hide Terms & Conditions' : 'Read Full Terms & Conditions'}
          </button>
          {showTerms && (
            <div className="additional-info">
              <p>Acceptance: By using this website, you agree to these terms and conditions.

Intellectual Property: All content on this site is owned by us or our content providers. No reproduction or redistribution without permission.

User Conduct: Use the site legally. Do not post harmful, unlawful, or infringing content.

User Content: By submitting content, you grant us a license to use it. Ensure your submissions do not violate third-party rights.

Third-Party Links: We are not responsible for the content or practices of external websites linked from our site.

Disclaimer: The site is provided "as-is" with no warranties. We do not guarantee uninterrupted or error-free operation.

Limitation of Liability: We are not liable for any indirect or consequential damages related to your use of the site.

Changes: We may update these terms at any time. Continued use implies acceptance of the changes.

Governing Law: These terms are governed by the laws of [Your State/Country]. Disputes will be handled in [Your Jurisdiction].

Contact: For questions, contact us at [Your Contact Information].</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Blog;
