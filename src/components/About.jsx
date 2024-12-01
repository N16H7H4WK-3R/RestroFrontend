const About = () => {
  return (
    <>
      <div
        className="about-hero"
        id="abt"
        style={{
          background: 'url("https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500") no-repeat center center/cover',
          padding: '100px 20px',
          color: 'Black',
          textAlign: 'center',
          fontFamily: "'Roboto', sans-serif",
          boxShadow: 'inset 0 0 50px rgba(0, 0, 0, 0.5)',
        }}
      >
        <h1
          className="about-title"
          style={{
            fontSize: '3.5em',
            fontWeight: '700',
            marginBottom: '20px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            animation: 'fadeIn 1.5s ease-out',
          }}
        >
          About Us
        </h1>
        <div
          className="about-content"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'left',
            lineHeight: '1.6',
          }}
        >
          <p
            className="about-description"
            style={{
              fontSize: '1.3em',
              marginBottom: '30px',
              padding: '0 20px',
              animation: 'fadeIn 2s ease-out',
            }}
          >
            <strong>Based in Kanpur, India,</strong> Restro Book is a family-owned Indian restaurant focused on traditional recipes served with a modern twist. The chefs draw inspiration from North Indian, South Indian, and Mughlai cuisines, offering a rotating menu of 12–15 seasonal dishes. The warm and inviting atmosphere, paired with moderate prices, makes it a favorite destination for meals at any time of the day.</p>
          <div
            className="about-details"
            style={{
              marginTop: '30px',
            }}
          >
            <p
              className="about-text"
              style={{
                fontSize: '1.2em',
                marginBottom: '20px',
                padding: '0 20px',
                animation: 'fadeIn 2.5s ease-out',
              }}
            >
              Restro Book is owned by two brothers, Arjun and Rohan, who grew up in Kanpur and pursued their dream of owning a restaurant that celebrates Indian culinary heritage.
            </p>
            <p
              className="about-text"
              style={{
                fontSize: '1.2em',
                marginBottom: '20px',
                padding: '0 20px',
                animation: 'fadeIn 2.5s ease-out',
              }}
            >
              To craft the menu, Arjun relies on family recipes and his experience as a chef working in prominent Indian kitchens. Rohan handles all the marketing for the restaurant and led the effort to expand the menu beyond traditional North Indian fare to include diverse flavors from across India.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;