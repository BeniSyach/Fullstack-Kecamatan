<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class data_kata_sambutan extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tb_kata_sambutan')->insert([
            [
                'kode_kecamatan' => '000000',
                'nama_kepala_camat' =>'Admin Camat',
                'gambar_camat' =>'https://deliserdangkab.go.id/logonya.png',
                'judul_kataSambutan' =>'Kata Sambutan Camat',
                'isi_kataSambutan' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam suscipit magni repudiandae quibusdam tempore odio. Quis quod soluta cupiditate, repellat beatae eius laudantium veniam deleniti corrupti eos et magnam, quidem explicabo ratione? Sint repudiandae a nam error labore! Fugit at ipsam minus ratione corrupti fugiat dolorum voluptate doloribus rem sit eligendi, odit delectus sint a exercitationem quasi itaque voluptatem quia. Error amet consectetur saepe quidem necessitatibus! Sit numquam distinctio nisi dolor illum tenetur impedit voluptatum, ea quibusdam? Laudantium, labore vitae. Nihil veniam totam expedita cumque aliquid nam, mollitia veritatis libero est, quisquam sunt ipsa quas nesciunt pariatur laudantium necessitatibus soluta aspernatur eius ipsum asperiores voluptatum odio assumenda molestias? Suscipit molestias excepturi corporis magni, modi vel, mollitia asperiores aliquam labore, fugiat assumenda aspernatur quae! Mollitia assumenda nihil placeat, eligendi eos voluptatum similique saepe aperiam libero exercitationem. Omnis quibusdam natus reiciendis ea quaerat accusantium officiis officia quia temporibus laboriosam recusandae, labore delectus dicta, repellat architecto sunt alias rem, commodi vel fuga! Molestiae non sunt consectetur perferendis est laudantium amet repellendus suscipit accusamus quisquam sapiente recusandae, impedit aut dolores, praesentium, voluptatibus facilis quibusdam magnam maxime exercitationem eius! Harum, aspernatur temporibus error maiores pariatur tempore. Sunt, sint perferendis natus odit praesentium magnam enim, nemo inventore dignissimos iusto minus impedit consequuntur libero odio numquam doloremque, deserunt autem fuga nostrum repudiandae maxime. Laudantium perferendis ea rerum totam! Nemo ab, natus quo reprehenderit officia placeat excepturi sapiente, minima sunt maxime mollitia dolor enim repellat error praesentium explicabo veniam facere molestias impedit. Enim fugit quo sequi, odio tempore ratione deleniti, totam deserunt harum recusandae assumenda voluptatem excepturi atque quam illo velit libero sint ea commodi a nihil esse, qui vel! Officiis voluptatibus quisquam labore nostrum, cum est rerum sint maxime rem fuga exercitationem minima earum ea sed quaerat perspiciatis doloremque repellendus dolorem ut vero deserunt cupiditate quod quam.',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'kode_kecamatan' => '120709',
                'nama_kepala_camat' =>'Admin Camat',
                'gambar_camat' =>'https://deliserdangkab.go.id/logonya.png',
                'judul_kataSambutan' =>'Kata Sambutan Camat',
                'isi_kataSambutan' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam suscipit magni repudiandae quibusdam tempore odio. Quis quod soluta cupiditate, repellat beatae eius laudantium veniam deleniti corrupti eos et magnam, quidem explicabo ratione? Sint repudiandae a nam error labore! Fugit at ipsam minus ratione corrupti fugiat dolorum voluptate doloribus rem sit eligendi, odit delectus sint a exercitationem quasi itaque voluptatem quia. Error amet consectetur saepe quidem necessitatibus! Sit numquam distinctio nisi dolor illum tenetur impedit voluptatum, ea quibusdam? Laudantium, labore vitae. Nihil veniam totam expedita cumque aliquid nam, mollitia veritatis libero est, quisquam sunt ipsa quas nesciunt pariatur laudantium necessitatibus soluta aspernatur eius ipsum asperiores voluptatum odio assumenda molestias? Suscipit molestias excepturi corporis magni, modi vel, mollitia asperiores aliquam labore, fugiat assumenda aspernatur quae! Mollitia assumenda nihil placeat, eligendi eos voluptatum similique saepe aperiam libero exercitationem. Omnis quibusdam natus reiciendis ea quaerat accusantium officiis officia quia temporibus laboriosam recusandae, labore delectus dicta, repellat architecto sunt alias rem, commodi vel fuga! Molestiae non sunt consectetur perferendis est laudantium amet repellendus suscipit accusamus quisquam sapiente recusandae, impedit aut dolores, praesentium, voluptatibus facilis quibusdam magnam maxime exercitationem eius! Harum, aspernatur temporibus error maiores pariatur tempore. Sunt, sint perferendis natus odit praesentium magnam enim, nemo inventore dignissimos iusto minus impedit consequuntur libero odio numquam doloremque, deserunt autem fuga nostrum repudiandae maxime. Laudantium perferendis ea rerum totam! Nemo ab, natus quo reprehenderit officia placeat excepturi sapiente, minima sunt maxime mollitia dolor enim repellat error praesentium explicabo veniam facere molestias impedit. Enim fugit quo sequi, odio tempore ratione deleniti, totam deserunt harum recusandae assumenda voluptatem excepturi atque quam illo velit libero sint ea commodi a nihil esse, qui vel! Officiis voluptatibus quisquam labore nostrum, cum est rerum sint maxime rem fuga exercitationem minima earum ea sed quaerat perspiciatis doloremque repellendus dolorem ut vero deserunt cupiditate quod quam.',
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}
