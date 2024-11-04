import ContentColorSwatch from './ContentColorSwatch';
import ContentText from './ContentText';
import FooterArrows from './FooterArrows';

const ContentFull = () => {
    return <div className='ContentFull'>
        <div className='content1'>
        <ContentText />
        <FooterArrows />
        </div>
        <div className='content2'>
        
        <ContentColorSwatch />
        </div>
    </div>
}
 
export default ContentFull;

