
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function SIGStoreCatalog() {
  const products = [
    "20DD3787-F80A-4D97-91AA-B1DC587EF1C5.jpg",
    "823A4979-DF7F-4E01-85C8-657D4DA8989C.jpg",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_0E7EC5E5-18B5-4FFF-A583-09F2FB4C0897.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_13A2F7E0-8577-49E3-84A8-A7443A801DBC.jpg",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_15B65BA3-70C0-42B4-B852-9F6DE69B84CA.jpg",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_1683D119-8A9F-4813-BCE6-E65FEE8D38EC.jpg",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_1907A457-DA17-4817-B7DE-5A32F7CF98DB.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_19748CC3-36C2-471E-8C0C-FD399840A12C.jpg",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_20ABE45F-3777-45BE-AF3A-AB4159E88F5B.jpg",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_25732BE1-EE5E-4036-9048-497EB6862458.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_272C3BD1-7AAF-49A7-8EBF-B4C98F34D006.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_284942EB-E590-48B0-B978-427D047DD62C.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_2A9DD2BD-6376-416C-B356-811F96BEC52C.jpg",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_2B2401F6-8B38-4D77-935F-ECB6FF0C32E7.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_2F39AE05-7CD9-4331-BDCC-3EFB16A99F2C.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_3125684C-074F-4D34-9712-ED3DF83E07E0.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_31688AE1-B5F7-476E-82EB-AF3A0787AEDE.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_34F56A8A-DE54-4F28-A012-C760F823D70D.jpg",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_364B432B-C7B4-4616-8ED2-5B26BD984AFF.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_3E8C90D8-A7FD-49AB-8443-FC7B3CBDBC96.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_44819D56-99BB-4D98-BD65-B5FDA4E3CA40.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_510B1C4E-A84C-4F31-8CEC-02D0A99B2C19.jpg",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_53F0426D-476D-4568-A9CC-981273131129.jpg",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_548C1085-E7DE-4542-9D92-7875CBAB50EE.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_54C14720-6563-4528-BE66-1E3B4857B1C5.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_568F802D-0C61-448D-876C-7B3731AF20C8.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_58ADEA58-8236-4646-8005-C675F2FB6C8D.jpg",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_5C72F1E2-8D0C-4573-8769-6BA78B8634FD.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_617360C8-3C70-4A12-B2F2-F750511E7E6C.jpg",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_628D8905-873B-4766-8AE0-6173CD1551F3.jpg",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_646B5497-EB43-4167-A903-7460752A9917.jpg",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_653B4018-5866-4BCF-B155-9E444EA977FC.jpg",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_656400EC-735E-4908-849E-67C81A10D96E.jpg",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_66DEA452-0494-4952-9170-A65D631317E8.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_695344F1-8438-435F-8DF1-3B0653E22CCD.jpg",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_6C4DD003-F1C1-4A95-91C8-6D7E469491C5.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_6D820580-A392-4033-8698-C9DECD98CD2D.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_6DE259A5-39E3-46E1-A15C-93C4D3FB696B.jpg",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_6E98FCE9-5E91-4052-B098-77CFD7D4920A.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_7492BADA-A094-4A13-A6DB-E9639CC1984E.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_76D4D7E2-8727-4240-884F-C780E05705EE.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_7B0AF8CB-A192-4715-AE98-E5A662DEF5F7.jpg",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_84854E64-7650-4729-8A05-203EF0DB35AB.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_884B51A6-3DB5-4EDF-9025-80D9A882C326.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_90A9E091-8C10-4659-831A-EC65456407DD.jpg",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_91653688-8341-493B-9FAB-F92E61177729.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_920DF6C5-B630-46AC-BD2A-6F2E9C4C6145.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_937D1CFA-340C-4DF5-ACF5-2F9FEFC8950E.jpg",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_95E4E7F3-23BA-436E-AE15-EACC5F5F65A3.jpg",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_9870A898-4ACF-41B5-9562-7D0B977BE006.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_99DB77BF-3A6F-422A-B89B-DCBFB3D132AC.jpg",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_AB709D22-6221-43AD-A994-95D588745D11.jpg",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_AFF27F0A-EDA5-4896-AD6D-8C59ABEB34AC.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_B040D866-8A97-4581-86C6-E41009A01D47.jpg",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_B522999E-0348-46C5-A784-1A586E885F0B.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_CFAB09D0-929F-4B5B-8A01-1315C4298DDD.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_D397E8C1-D9BA-44A3-B49B-E95EFAEFE0F2.jpg",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_D73039D8-8A13-4262-B22E-62484C280AD0.jpg",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_D8B07F9F-D45D-466C-897F-51C4B44027C7.jpg",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_DC0A8F8C-5297-4D66-AB53-44ACDB1D141C.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_DF4BD9E7-F2F3-49FC-BBFF-37F444C3A8F5.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_DFF4C449-77D5-443F-9776-AD8C2D330273.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_E16791BA-CE29-46A8-B7F6-BDBB491638A8.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_EA6DFCF6-2CAE-4ACD-9131-1032C7519CA2.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_EAA1F464-49FA-46F2-AE46-9D8F5DEF06A1.jpg",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_EE55D6BC-51D2-4F5B-8DCC-D78A5907464C.jpg",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_EE94EB5B-B25A-47D4-B848-1986CAD17D16.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_F07984D3-06EC-440B-9938-C4CF91E3F700.jpg",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_F0853214-C6F5-4367-B9EA-9E09EAE44B72.jpg",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_F24094A5-A670-4731-B4B0-521CCDA672BE.webp",
    "oVLYHPCe0ERswdhKjkOqrNk5c6Q2_thumb_280_F772E348-8464-442B-A20B-1BE74284C594.jpg"
  ];

  return (
    <div className="min-h-screen bg-neutral-100 p-6">
      <header className="flex flex-col items-center mb-10">
        <img src="/logo-sig-store.png" alt="SIG STORE Logo" className="w-40 mb-4" />
        <h1 className="text-3xl font-bold text-neutral-800">SIG STORE</h1>
        <p className="text-neutral-500">Moda urbana com atitude</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((img, index) => (
          <Card key={index} className="bg-white rounded-2xl shadow-md">
            <CardContent className="p-4">
              <img src={`/produtos/${img}`} alt={`Camisa ${index + 1}`} className="rounded-lg mb-4" />
              <Button 
                className="w-full bg-black text-white hover:bg-neutral-800"
                onClick={() => window.open('https://wa.me/5516994516633', '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-2" /> Falar no WhatsApp
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
