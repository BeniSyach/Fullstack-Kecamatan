<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class data_detail_potensi extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tb_detail_potensi')->insert([
        [
            'kode_kecamatan' => '000000',
            'potensi_id' => 1,
            'gambar_potensi' => 'https://matakepri.com/images/data/news-pic/20200309084448-IMG_20200304_122044.jpg',
            'konten_potensi' =>'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit autem at nisi sunt veritatis consequuntur nemo eum, officia obcaecati, ipsum, maxime quas cumque quis laudantium ullam iusto iste tempora aut minima nobis in deleniti molestiae quod sit. Ipsam laborum placeat, perferendis itaque, rem explicabo magni iure, tenetur quisquam similique voluptatem reiciendis aut quidem tempore quod provident enim fugit! Asperiores eligendi consequuntur porro dolorem necessitatibus? Sequi harum quas minus repellat. Laudantium expedita, laborum sequi sunt sit sed eum rem nihil ullam accusamus in, iusto ipsam repellendus? Voluptatibus illum dicta veritatis rem ipsa cum deserunt, animi eius natus, ratione quibusdam at corrupti necessitatibus magni a nobis vero. Quia quibusdam aut obcaecati quasi assumenda, ducimus dolor, alias, ut optio quam deleniti. Consectetur voluptatum autem architecto culpa rerum sit harum commodi voluptate esse debitis veritatis illum doloremque, quibusdam nisi at quisquam. Nesciunt dolores, voluptatum magnam fugiat deleniti obcaecati quibusdam reiciendis sequi animi delectus ea accusantium consectetur, ratione quia in. Illum, reiciendis animi? Qui animi in, ad delectus nostrum neque quod, praesentium similique reiciendis optio, eveniet dicta perspiciatis eaque? Excepturi commodi delectus doloremque. Quae vitae provident possimus eum et veritatis atque minus velit accusamus placeat ab accusantium, ad error impedit magni itaque magnam saepe culpa id! Ratione voluptatibus molestiae numquam nostrum adipisci voluptate sapiente earum libero, pariatur vero error commodi iusto maxime animi aliquid consectetur suscipit? Alias sequi corrupti totam itaque soluta deleniti, sed earum, officiis, eum odio voluptatem voluptate. Atque, praesentium vitae. Reprehenderit nulla nobis consequuntur amet eos adipisci velit! Iure tenetur quibusdam eligendi, dolores voluptate dignissimos placeat cumque asperiores minus, expedita inventore, architecto minima. Sequi suscipit natus porro autem consectetur quasi itaque odit nemo neque quos, consequuntur enim facere officia, ducimus tempora maiores rerum impedit ut sit deleniti vero eligendi? Illum recusandae doloremque animi voluptas architecto! Quos officiis architecto repellendus nam nesciunt pariatur.',
            'created_at' =>now(),
            'updated_at' =>now()
        ],
        [
            'kode_kecamatan' => '000000',
            'potensi_id' => 2,
            'gambar_potensi' => 'https://matakepri.com/images/data/news-pic/20200309084448-IMG_20200304_122044.jpg',
            'konten_potensi' =>'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit autem at nisi sunt veritatis consequuntur nemo eum, officia obcaecati, ipsum, maxime quas cumque quis laudantium ullam iusto iste tempora aut minima nobis in deleniti molestiae quod sit. Ipsam laborum placeat, perferendis itaque, rem explicabo magni iure, tenetur quisquam similique voluptatem reiciendis aut quidem tempore quod provident enim fugit! Asperiores eligendi consequuntur porro dolorem necessitatibus? Sequi harum quas minus repellat. Laudantium expedita, laborum sequi sunt sit sed eum rem nihil ullam accusamus in, iusto ipsam repellendus? Voluptatibus illum dicta veritatis rem ipsa cum deserunt, animi eius natus, ratione quibusdam at corrupti necessitatibus magni a nobis vero. Quia quibusdam aut obcaecati quasi assumenda, ducimus dolor, alias, ut optio quam deleniti. Consectetur voluptatum autem architecto culpa rerum sit harum commodi voluptate esse debitis veritatis illum doloremque, quibusdam nisi at quisquam. Nesciunt dolores, voluptatum magnam fugiat deleniti obcaecati quibusdam reiciendis sequi animi delectus ea accusantium consectetur, ratione quia in. Illum, reiciendis animi? Qui animi in, ad delectus nostrum neque quod, praesentium similique reiciendis optio, eveniet dicta perspiciatis eaque? Excepturi commodi delectus doloremque. Quae vitae provident possimus eum et veritatis atque minus velit accusamus placeat ab accusantium, ad error impedit magni itaque magnam saepe culpa id! Ratione voluptatibus molestiae numquam nostrum adipisci voluptate sapiente earum libero, pariatur vero error commodi iusto maxime animi aliquid consectetur suscipit? Alias sequi corrupti totam itaque soluta deleniti, sed earum, officiis, eum odio voluptatem voluptate. Atque, praesentium vitae. Reprehenderit nulla nobis consequuntur amet eos adipisci velit! Iure tenetur quibusdam eligendi, dolores voluptate dignissimos placeat cumque asperiores minus, expedita inventore, architecto minima. Sequi suscipit natus porro autem consectetur quasi itaque odit nemo neque quos, consequuntur enim facere officia, ducimus tempora maiores rerum impedit ut sit deleniti vero eligendi? Illum recusandae doloremque animi voluptas architecto! Quos officiis architecto repellendus nam nesciunt pariatur.',
            'created_at' =>now(),
            'updated_at' =>now()
        ],
    ]);
    }
}
