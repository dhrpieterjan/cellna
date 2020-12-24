import "./fotoviewer.scss";
import ImageGallery from 'react-image-gallery';

export default function FotoViewer(props) {

    const images = [];

    props.fotos.forEach(element => {
        images.push({
            original: `https://api.cellna.be${element.url}`,
            thumbnail: `https://api.cellna.be${element.url}`
        });
    });

    return (

        <div className="fv" id="fotos">
            <div
                className="bollen"
                style={{ backgroundImage: "url(../static/bollen.png)" }}>
                <h2 className="sub">Fotogalerij</h2>
            </div>
            <ImageGallery items={images} autoPlay={true} slideInterval={15000} className="imageviewer" />
        </div>
    )
}