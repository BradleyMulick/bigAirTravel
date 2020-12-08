import React from 'react'
import ImageGallery from 'react-image-gallery';
import styled from 'styled-components'

const Homo = styled.div`
width: 100%;
margin-top: vh;

.img-galleryz {

width: 80%;
margin: 20px;
}

.rooms {
    width: 100%;
    display:flex;
    justify-content: center;
  
}
`

function HomeGallery() {
    const images = [
        {
            original: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1534989194150-J9E24ZZFHI0EFG7527MK/ke17ZwdGBToddI8pDm48kNPKVmbt05aEWnErXou3fDl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0tb-hnCqoepq4X8c1traqO_6-8vaS3UGENu9QP5pfFlLbyLeIY6QzmBTG9h7XCKkkQ/Lodge1.jpg?format=2500w',
            thumbnail: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1534989194150-J9E24ZZFHI0EFG7527MK/ke17ZwdGBToddI8pDm48kNPKVmbt05aEWnErXou3fDl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0tb-hnCqoepq4X8c1traqO_6-8vaS3UGENu9QP5pfFlLbyLeIY6QzmBTG9h7XCKkkQ/Lodge1.jpg?format=300w',
        },
        {
            original: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1534989673263-ON6IOAU62T65RAN3R7ZY/ke17ZwdGBToddI8pDm48kNPKVmbt05aEWnErXou3fDl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0tb-hnCqoepq4X8c1traqO_6-8vaS3UGENu9QP5pfFlLbyLeIY6QzmBTG9h7XCKkkQ/DJI_0167.jpg?format=2500w',
            thumbnail: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1534989673263-ON6IOAU62T65RAN3R7ZY/ke17ZwdGBToddI8pDm48kNPKVmbt05aEWnErXou3fDl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0tb-hnCqoepq4X8c1traqO_6-8vaS3UGENu9QP5pfFlLbyLeIY6QzmBTG9h7XCKkkQ/DJI_0167.jpg?format=300w',
        },
        {
            original: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1534989533399-MZU1O2TGYB67P71JN0EW/ke17ZwdGBToddI8pDm48kNPKVmbt05aEWnErXou3fDl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0tb-hnCqoepq4X8c1traqO_6-8vaS3UGENu9QP5pfFlLbyLeIY6QzmBTG9h7XCKkkQ/DJI_0183.jpg?format=2500w',
            thumbnail: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1534989533399-MZU1O2TGYB67P71JN0EW/ke17ZwdGBToddI8pDm48kNPKVmbt05aEWnErXou3fDl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0tb-hnCqoepq4X8c1traqO_6-8vaS3UGENu9QP5pfFlLbyLeIY6QzmBTG9h7XCKkkQ/DJI_0183.jpg?format=300w',
        },
        {
            original: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432921456895-2STEZU5WDKOYJZSN2GRF/ke17ZwdGBToddI8pDm48kPqJSAio1NKDvIK-wXfTDCUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcCEK8Cx-Dx_Vx-Bo7p4kFDmvGEycJoxloB6oTivkJoR6zvRZrxl5WeKq7DYSG24RR/clubhouse.jpeg?format=2500w',
            thumbnail: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432921456895-2STEZU5WDKOYJZSN2GRF/ke17ZwdGBToddI8pDm48kPqJSAio1NKDvIK-wXfTDCUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcCEK8Cx-Dx_Vx-Bo7p4kFDmvGEycJoxloB6oTivkJoR6zvRZrxl5WeKq7DYSG24RR/clubhouse.jpeg?format=300w',
        },
        {
            original: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432993543460-O1BCD4X9MN3O0PU17JH7/ke17ZwdGBToddI8pDm48kFOJCex-rbfpoU9FAegvnrIUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcXA0Mhqv80DCuQW4zQEwq1R-ayca0g-tExWrOc5Se2aIiooPqewV-8wpawvAYY-6d/sunsetrancho3.jpeg?format=2500w',
            thumbnail: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432993543460-O1BCD4X9MN3O0PU17JH7/ke17ZwdGBToddI8pDm48kFOJCex-rbfpoU9FAegvnrIUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcXA0Mhqv80DCuQW4zQEwq1R-ayca0g-tExWrOc5Se2aIiooPqewV-8wpawvAYY-6d/sunsetrancho3.jpeg?format=300w',
        },
        {
            original: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1534989354712-9W0VQ6TLYW2RFDXTDUBX/ke17ZwdGBToddI8pDm48kFmfxoboNKufWj-55Bgmc-J7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iXS6XmVv7bUJ418E8Yoc1hjuviiiZmrL38w1ymUdqq4JaGeFUxjM-HeS7Oc-SSFcg/DiningTable.jpg?format=2500w',
            thumbnail: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1534989354712-9W0VQ6TLYW2RFDXTDUBX/ke17ZwdGBToddI8pDm48kFmfxoboNKufWj-55Bgmc-J7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iXS6XmVv7bUJ418E8Yoc1hjuviiiZmrL38w1ymUdqq4JaGeFUxjM-HeS7Oc-SSFcg/DiningTable.jpg?format=300w',
        },
        {
            original: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432993537627-0RFCZO3124OPSN31JNNM/ke17ZwdGBToddI8pDm48kPqJSAio1NKDvIK-wXfTDCUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcCEK8Cx-Dx_Vx-Bo7p4kFDmvGEycJoxloB6oTivkJoR6zvRZrxl5WeKq7DYSG24RR/sunsetrancho.jpeg?format=2500w',
            thumbnail: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432993537627-0RFCZO3124OPSN31JNNM/ke17ZwdGBToddI8pDm48kPqJSAio1NKDvIK-wXfTDCUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcCEK8Cx-Dx_Vx-Bo7p4kFDmvGEycJoxloB6oTivkJoR6zvRZrxl5WeKq7DYSG24RR/sunsetrancho.jpeg?format=300w',
        },
        {
            original: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1534989354881-R51J6O69UE9MHRT7TX21/ke17ZwdGBToddI8pDm48kFmfxoboNKufWj-55Bgmc-J7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iXS6XmVv7bUJ418E8Yoc1hjuviiiZmrL38w1ymUdqq4JaGeFUxjM-HeS7Oc-SSFcg/Lodge5.jpg?format=2500w',
            thumbnail: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1534989354881-R51J6O69UE9MHRT7TX21/ke17ZwdGBToddI8pDm48kFmfxoboNKufWj-55Bgmc-J7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iXS6XmVv7bUJ418E8Yoc1hjuviiiZmrL38w1ymUdqq4JaGeFUxjM-HeS7Oc-SSFcg/Lodge5.jpg?format=300w',
        },
        {
            original: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432921620682-144NVU3KOFVOTZKKVD4Q/ke17ZwdGBToddI8pDm48kPqJSAio1NKDvIK-wXfTDCUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcCEK8Cx-Dx_Vx-Bo7p4kFDmvGEycJoxloB6oTivkJoR6zvRZrxl5WeKq7DYSG24RR/clubhouse3.jpeg?format=2500w',
            thumbnail: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432921620682-144NVU3KOFVOTZKKVD4Q/ke17ZwdGBToddI8pDm48kPqJSAio1NKDvIK-wXfTDCUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcCEK8Cx-Dx_Vx-Bo7p4kFDmvGEycJoxloB6oTivkJoR6zvRZrxl5WeKq7DYSG24RR/clubhouse3.jpeg?format=300w',
        },
        {
            original: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1534963757673-KINMBYLD960KOQOY6CZ4/ke17ZwdGBToddI8pDm48kDk1dm1oSR9gCa1mX4KqzjN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luj0xCD0oh5KMc0gpox0u-wQWxfQHg04OxgQwaUq2yiAcNt5Kg2tE9yEtYfM4xwaw/AMGP3353.jpg?format=2500w',
            thumbnail: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1534963757673-KINMBYLD960KOQOY6CZ4/ke17ZwdGBToddI8pDm48kDk1dm1oSR9gCa1mX4KqzjN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luj0xCD0oh5KMc0gpox0u-wQWxfQHg04OxgQwaUq2yiAcNt5Kg2tE9yEtYfM4xwaw/AMGP3353.jpg?format=300w',
        },
        {
            original: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1534989737349-9GP4VJ8YV9DJ8LA4VK10/ke17ZwdGBToddI8pDm48kFmfxoboNKufWj-55Bgmc-J7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iXS6XmVv7bUJ418E8Yoc1hjuviiiZmrL38w1ymUdqq4JaGeFUxjM-HeS7Oc-SSFcg/Lodge7.jpg?format=2500w',
            thumbnail: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1534989737349-9GP4VJ8YV9DJ8LA4VK10/ke17ZwdGBToddI8pDm48kFmfxoboNKufWj-55Bgmc-J7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iXS6XmVv7bUJ418E8Yoc1hjuviiiZmrL38w1ymUdqq4JaGeFUxjM-HeS7Oc-SSFcg/Lodge7.jpg?format=300w',
        },
        {
            original: '',
            thumbnail: '',
        },
    ];


    return (
        <Homo>
            <div className="rooms">
                <div className="img-galleryz">

                    <ImageGallery items={images} />


                </div>

            </div>




        </Homo>
    )
}


export default HomeGallery