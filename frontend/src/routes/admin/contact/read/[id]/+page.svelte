<script lang="ts">

    export let data
</script>

<div class="h-full flex justify-center items-center">
    <div class="flex flex-col h-4/5 w-3/5 rounded-4xl bg-adminbg-2 border-adminbg-3 border shadow-2xl shadow-black/10 ">
        <div class="pt-12 border h-full rounded-4xl flex justify-center w-full flex-col pl-2 pr-2">
            <div class="flex justify-center items-start text-5xl">
                İletişim
            </div>
            <div class="w-full border-b text-2xl">
                <span>Mail: </span>
                <span>{data.contact.email}</span>
            </div>
            <div class="border-b">
                <span>İsim: </span>
                <span>{data.contact.name}</span>
            </div>
            <div class="border-b">
                <span>Telefon Numarası: </span>
                <span>{data.contact.phone}</span>
            </div>
            <div>Mesaj: </div>
            <div class="h-full p-12 border-adminbg-3 border text-3xl rounded-b-xl">
                {data.contact.message}
            </div>
            <div class="text-sm flex items-end justify-end pr-8 text-slate-500">
                <span>Oluşturulma Zamanı :</span>
                <div>{data.contact.createdAt}</div>
            </div>
        </div>
        
    </div>
</div>