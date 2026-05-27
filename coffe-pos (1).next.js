<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Café Origen — POS · Puebla</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet"/>
  <style>
    :root{--espresso:#1a0e07;--roast:#3d1f0d;--caramel:#c17f3b;--cream:#f5ede0;--foam:#fdf8f2;--latte:#e8d5b7;--bark:#7c4a1e;--accent:#e8602a;--green:#16a34a;--red:#dc2626;}
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
    body{font-family:'DM Sans',sans-serif;background:var(--foam);color:var(--espresso);min-height:100vh;}
    ::-webkit-scrollbar{width:6px;}::-webkit-scrollbar-track{background:var(--cream);}::-webkit-scrollbar-thumb{background:var(--caramel);border-radius:3px;}

    /* NAV */
    nav{background:var(--espresso);position:sticky;top:0;z-index:100;padding:0 24px;height:64px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 2px 12px rgba(0,0,0,.3);}
    .nav-logo{display:flex;align-items:center;gap:10px;cursor:pointer;}
    .nav-icon{width:38px;height:38px;border-radius:50%;background:var(--caramel);display:flex;align-items:center;justify-content:center;font-size:18px;}
    .nav-title{color:var(--cream);font-family:'Playfair Display',serif;font-size:20px;font-weight:700;}
    .nav-sub{color:var(--latte);font-size:11px;}
    .cart-btn{position:relative;background:var(--roast);color:var(--cream);border:none;cursor:pointer;padding:8px 18px;border-radius:999px;font-size:14px;font-weight:500;display:flex;align-items:center;gap:6px;transition:background .2s,transform .1s;font-family:'DM Sans',sans-serif;}
    .cart-btn:hover{opacity:.88;}.cart-btn:active{transform:scale(.96);}.cart-btn.has-items{background:var(--caramel);}
    .cart-badge{position:absolute;top:-6px;right:-6px;background:var(--accent);color:white;width:20px;height:20px;border-radius:50%;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;}

    /* HERO */
    .hero{background:var(--roast);padding:0;}
    .hero-main{padding:28px 24px 20px;max-width:1200px;margin:0 auto;}
    .hero-label{color:var(--caramel);font-size:11px;text-transform:uppercase;letter-spacing:3px;margin-bottom:4px;}
    .hero h1{font-family:'Playfair Display',serif;font-size:38px;color:var(--cream);font-style:italic;}
    .hero-desc{color:var(--latte);font-size:13px;margin-top:4px;}
    .hero-location{background:rgba(0,0,0,.25);border-top:1px solid rgba(255,255,255,.08);padding:12px 24px;}
    .hero-location-inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;flex-wrap:wrap;gap:16px;}
    .loc-item{display:flex;align-items:center;gap:7px;color:var(--latte);font-size:13px;}
    .loc-item a{color:var(--caramel);text-decoration:none;font-weight:600;}
    .loc-item a:hover{text-decoration:underline;}

    /* CONTAINER */
    .container{max-width:1200px;margin:0 auto;padding:24px;}

    /* FILTERS */
    .filters{display:flex;gap:8px;overflow-x:auto;padding-bottom:4px;margin-bottom:20px;scrollbar-width:none;}
    .filters::-webkit-scrollbar{display:none;}
    .filter-btn{white-space:nowrap;border:1.5px solid var(--latte);background:white;color:var(--roast);padding:8px 16px;border-radius:999px;font-size:13px;font-weight:500;cursor:pointer;transition:all .15s;font-family:'DM Sans',sans-serif;}
    .filter-btn:hover{opacity:.75;}.filter-btn.active{background:var(--espresso);color:var(--cream);border-color:var(--espresso);}

    /* GRID */
    .count{font-size:13px;color:var(--bark);margin-bottom:16px;}
    .count a{color:var(--caramel);cursor:pointer;text-decoration:underline;}
    .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:16px;}

    /* CARD */
    .card{background:white;border:1px solid var(--latte);border-radius:16px;overflow:hidden;cursor:pointer;transition:transform .2s,box-shadow .2s;animation:fadeIn .4s ease forwards;opacity:0;}
    .card:hover{transform:translateY(-4px);box-shadow:0 8px 24px rgba(0,0,0,.10);}
    .card-img-wrap{position:relative;overflow:hidden;height:160px;background:#eee;}
    .card-img{width:100%;height:160px;object-fit:cover;display:block;transition:transform .4s;}
    .card:hover .card-img{transform:scale(1.05);}
    .card-tag{position:absolute;top:8px;left:8px;background:rgba(253,248,242,.93);color:var(--bark);font-size:11px;padding:2px 8px;border-radius:999px;}
    .card-qty{position:absolute;top:8px;right:8px;background:var(--caramel);color:white;width:22px;height:22px;border-radius:50%;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;}
    .card-body{padding:12px;}
    .card-name{font-family:'Playfair Display',serif;font-size:15px;font-weight:600;line-height:1.2;color:var(--espresso);}
    .card-desc{font-size:12px;color:var(--bark);margin-top:4px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}
    .card-footer{display:flex;align-items:center;justify-content:space-between;margin-top:10px;}
    .card-price{font-family:'Playfair Display',serif;font-size:20px;font-weight:700;color:var(--caramel);}
    .add-btn{background:var(--espresso);color:var(--cream);border:none;cursor:pointer;padding:6px 12px;border-radius:999px;font-size:12px;font-weight:500;display:flex;align-items:center;gap:4px;transition:all .15s;font-family:'DM Sans',sans-serif;}
    .add-btn:hover{opacity:.85;}.add-btn:active{transform:scale(.94);}.add-btn.added{background:var(--green);}

    /* PAGES */
    .page{display:none;}.page.active{display:block;}

    /* DETAIL */
    .back-btn{display:inline-flex;align-items:center;gap:6px;background:none;border:none;cursor:pointer;color:var(--bark);font-size:13px;font-family:'DM Sans',sans-serif;margin-bottom:20px;padding:0;}
    .back-btn:hover{opacity:.7;}
    .detail-card{background:white;border:1px solid var(--latte);border-radius:24px;overflow:hidden;display:grid;grid-template-columns:1fr 1fr;max-width:800px;}
    @media(max-width:640px){.detail-card{grid-template-columns:1fr;}}
    .detail-img{width:100%;height:320px;object-fit:cover;display:block;}
    .detail-body{padding:28px;display:flex;flex-direction:column;justify-content:space-between;}
    .detail-cat{font-size:13px;color:var(--bark);margin-bottom:6px;}
    .detail-name{font-family:'Playfair Display',serif;font-size:28px;font-weight:700;color:var(--espresso);line-height:1.2;}
    .detail-desc{font-size:15px;color:var(--bark);margin-top:8px;font-weight:500;}
    .detail-price{font-family:'Playfair Display',serif;font-size:40px;font-weight:700;color:var(--caramel);margin-top:12px;}
    .detail-price span{font-size:14px;color:var(--bark);font-family:'DM Sans',sans-serif;font-weight:400;}
    .detail-info{font-size:13px;color:var(--roast);line-height:1.6;margin-top:10px;}
    .detail-tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px;}
    .tag{font-size:11px;padding:4px 10px;border-radius:999px;background:var(--cream);color:var(--bark);}
    .detail-actions{margin-top:20px;}
    .qty-controls{display:flex;align-items:center;gap:12px;background:var(--cream);padding:8px 14px;border-radius:16px;width:fit-content;}
    .qty-btn{width:32px;height:32px;border-radius:50%;background:var(--espresso);color:var(--cream);border:none;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;}
    .qty-btn:hover{opacity:.75;}
    .qty-num{font-family:'Playfair Display',serif;font-size:22px;font-weight:700;color:var(--espresso);min-width:24px;text-align:center;}
    .subtotal{font-size:13px;color:var(--bark);margin-top:8px;}.subtotal strong{color:var(--caramel);}
    .big-add-btn{width:100%;padding:14px;background:var(--espresso);color:var(--cream);border:none;cursor:pointer;border-radius:16px;font-size:16px;font-weight:600;display:flex;align-items:center;justify-content:center;gap:8px;transition:all .15s;font-family:'DM Sans',sans-serif;margin-top:10px;}
    .big-add-btn:hover{opacity:.88;}.big-add-btn:active{transform:scale(.98);}.big-add-btn.added{background:var(--green);}
    .view-cart-btn{width:100%;padding:10px;border:2px solid var(--caramel);color:var(--caramel);background:none;cursor:pointer;border-radius:16px;font-size:14px;font-weight:500;margin-top:8px;transition:opacity .15s;font-family:'DM Sans',sans-serif;}
    .view-cart-btn:hover{opacity:.7;}
    .related-title{font-family:'Playfair Display',serif;font-size:20px;margin:32px 0 14px;color:var(--espresso);}
    .related-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px;max-width:800px;}
    .related-card{background:white;border:1px solid var(--latte);border-radius:16px;overflow:hidden;cursor:pointer;transition:transform .2s,box-shadow .2s;}
    .related-card:hover{transform:translateY(-3px);box-shadow:0 6px 16px rgba(0,0,0,.08);}
    .related-img{width:100%;height:100px;object-fit:cover;display:block;}
    .related-body{padding:10px;}
    .related-name{font-weight:600;font-size:13px;color:var(--espresso);}
    .related-price{font-family:'Playfair Display',serif;font-weight:700;color:var(--caramel);margin-top:4px;}

    /* CART */
    .cart-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;}
    .cart-title-row{display:flex;align-items:center;gap:12px;}
    .cart-title{font-family:'Playfair Display',serif;font-size:26px;font-weight:700;color:var(--espresso);}
    .items-badge{background:var(--caramel);color:white;font-size:13px;padding:2px 10px;border-radius:999px;font-weight:500;}
    .clear-btn{background:none;border:none;cursor:pointer;color:var(--red);font-size:13px;display:flex;align-items:center;gap:4px;font-family:'DM Sans',sans-serif;}
    .clear-btn:hover{opacity:.7;}
    .confirm-bar{background:#fef2f2;border:1px solid #fecaca;border-radius:16px;padding:14px 18px;display:none;align-items:center;justify-content:space-between;margin-bottom:14px;}
    .confirm-bar.show{display:flex;}
    .confirm-bar p{font-size:13px;color:#991b1b;}
    .confirm-btns{display:flex;gap:8px;}
    .confirm-yes{background:var(--red);color:white;border:none;cursor:pointer;padding:6px 14px;border-radius:10px;font-size:13px;font-weight:500;font-family:'DM Sans',sans-serif;}
    .confirm-no{background:var(--cream);color:var(--bark);border:none;cursor:pointer;padding:6px 14px;border-radius:10px;font-size:13px;font-weight:500;font-family:'DM Sans',sans-serif;}
    .cart-items{display:flex;flex-direction:column;gap:10px;}
    .cart-item{background:white;border:1px solid var(--latte);border-radius:16px;padding:14px 16px;display:flex;align-items:center;gap:14px;animation:slideUp .3s ease forwards;}
    .ci-img{width:60px;height:60px;border-radius:10px;object-fit:cover;flex-shrink:0;cursor:pointer;}
    .ci-info{flex:1;min-width:0;}
    .ci-name{font-weight:600;font-size:14px;color:var(--espresso);cursor:pointer;}
    .ci-name:hover{text-decoration:underline;}
    .ci-unit{font-size:12px;color:var(--bark);margin-top:2px;}
    .ci-qty{display:flex;align-items:center;gap:8px;background:var(--cream);padding:6px 10px;border-radius:10px;}
    .ci-qty-btn{width:26px;height:26px;border-radius:6px;background:var(--espresso);color:var(--cream);border:none;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;}
    .ci-qty-num{font-weight:700;font-size:14px;color:var(--espresso);width:20px;text-align:center;}
    .ci-subtotal{font-family:'Playfair Display',serif;font-weight:700;color:var(--caramel);font-size:16px;width:60px;text-align:right;flex-shrink:0;}
    .ci-remove{background:none;border:none;cursor:pointer;color:var(--red);font-size:18px;padding:4px;flex-shrink:0;}
    .ci-remove:hover{opacity:.7;}
    .cart-summary{background:var(--espresso);border-radius:24px;padding:24px;margin-top:20px;color:var(--cream);}
    .summary-title{font-family:'Playfair Display',serif;font-size:18px;margin-bottom:14px;}
    .summary-lines{display:flex;flex-direction:column;gap:6px;margin-bottom:14px;}
    .summary-line{display:flex;justify-content:space-between;font-size:13px;}
    .summary-line span:first-child{color:var(--latte);}
    .summary-divider{border:none;border-top:1px solid var(--roast);margin:14px 0;}
    .summary-total{display:flex;justify-content:space-between;align-items:center;}
    .summary-total-label{color:var(--latte);font-size:14px;}
    .summary-total-price{font-family:'Playfair Display',serif;font-size:36px;font-weight:700;color:var(--caramel);}
    .summary-total-price span{font-size:13px;color:var(--latte);font-family:'DM Sans',sans-serif;font-weight:400;margin-left:4px;}
    .checkout-btn{width:100%;padding:14px;margin-top:16px;background:var(--caramel);color:white;border:none;cursor:pointer;border-radius:16px;font-size:16px;font-weight:700;transition:opacity .15s,transform .1s;font-family:'DM Sans',sans-serif;}
    .checkout-btn:hover{opacity:.88;}.checkout-btn:active{transform:scale(.98);}
    .keep-btn{width:100%;padding:10px;margin-top:8px;background:none;color:var(--latte);border:none;cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;}
    .keep-btn:hover{opacity:.7;}
    .empty-state{text-align:center;padding:80px 20px;}
    .empty-icon{font-size:56px;margin-bottom:12px;}
    .empty-title{font-family:'Playfair Display',serif;font-size:22px;color:var(--espresso);margin-bottom:8px;}
    .empty-sub{font-size:14px;color:var(--bark);margin-bottom:24px;}
    .go-catalog-btn{background:var(--espresso);color:var(--cream);border:none;cursor:pointer;padding:12px 28px;border-radius:16px;font-size:15px;font-weight:600;font-family:'DM Sans',sans-serif;transition:opacity .15s;}
    .go-catalog-btn:hover{opacity:.88;}

    /* ═══ CHECKOUT ═══ */
    .checkout-container{max-width:680px;margin:0 auto;padding:24px;}
    .checkout-steps{display:flex;align-items:center;justify-content:center;margin-bottom:28px;}
    .step{display:flex;flex-direction:column;align-items:center;gap:5px;}
    .step-circle{width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;border:2px solid var(--latte);background:white;color:var(--bark);transition:all .3s;}
    .step-circle.active{background:var(--caramel);border-color:var(--caramel);color:white;}
    .step-circle.done{background:var(--green);border-color:var(--green);color:white;}
    .step-label{font-size:11px;color:var(--bark);white-space:nowrap;}
    .step-label.active{color:var(--caramel);font-weight:600;}
    .step-line{width:56px;height:2px;background:var(--latte);margin-bottom:22px;transition:background .3s;}
    .step-line.done{background:var(--green);}
    @media(max-width:480px){.step-line{width:30px;}}
    .checkout-section{background:white;border:1px solid var(--latte);border-radius:20px;padding:22px;margin-bottom:14px;}
    .checkout-section h3{font-family:'Playfair Display',serif;font-size:18px;color:var(--espresso);margin-bottom:16px;display:flex;align-items:center;gap:8px;}
    .form-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
    @media(max-width:500px){.form-grid{grid-template-columns:1fr;}}
    .form-full{grid-column:1/-1;}
    .form-group{display:flex;flex-direction:column;gap:5px;}
    .form-label{font-size:11px;font-weight:600;color:var(--bark);text-transform:uppercase;letter-spacing:.5px;}
    .form-input{padding:10px 14px;border:1.5px solid var(--latte);border-radius:10px;font-size:14px;font-family:'DM Sans',sans-serif;color:var(--espresso);background:var(--foam);outline:none;transition:border-color .2s;}
    .form-input:focus{border-color:var(--caramel);}.form-input.error{border-color:var(--red);}
    .form-select{padding:10px 14px;border:1.5px solid var(--latte);border-radius:10px;font-size:14px;font-family:'DM Sans',sans-serif;color:var(--espresso);background:var(--foam);outline:none;transition:border-color .2s;cursor:pointer;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%237c4a1e' stroke-width='2' fill='none'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 14px center;padding-right:36px;}
    .form-select:focus{border-color:var(--caramel);}

    /* Delivery opts */
    .delivery-opts{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
    @media(max-width:480px){.delivery-opts{grid-template-columns:1fr;}}
    .delivery-opt{border:2px solid var(--latte);border-radius:14px;padding:14px 10px;cursor:pointer;transition:all .2s;text-align:center;}
    .delivery-opt:hover{border-color:var(--caramel);}
    .delivery-opt.selected{border-color:var(--caramel);background:var(--cream);}
    .delivery-opt-icon{font-size:26px;margin-bottom:6px;}
    .delivery-opt-name{font-weight:600;font-size:13px;color:var(--espresso);}
    .delivery-opt-desc{font-size:11px;color:var(--bark);margin-top:2px;}
    .delivery-opt-price{font-family:'Playfair Display',serif;font-weight:700;color:var(--caramel);margin-top:4px;font-size:14px;}

    /* Horario pickup */
    .schedule-section{margin-top:14px;padding:14px;background:var(--foam);border-radius:14px;border:1px solid var(--latte);}
    .schedule-title{font-size:12px;font-weight:600;color:var(--bark);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px;}
    .schedule-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;}

    /* Payment */
    .payment-opts{display:flex;flex-direction:column;gap:8px;}
    .payment-opt{border:2px solid var(--latte);border-radius:14px;padding:12px 16px;cursor:pointer;transition:all .2s;display:flex;align-items:center;gap:12px;}
    .payment-opt:hover{border-color:var(--caramel);}
    .payment-opt.selected{border-color:var(--caramel);background:var(--cream);}
    .payment-opt-icon{font-size:22px;flex-shrink:0;}
    .payment-opt-info{flex:1;}
    .payment-opt-name{font-weight:600;font-size:14px;color:var(--espresso);}
    .payment-opt-desc{font-size:12px;color:var(--bark);margin-top:1px;}
    .payment-check{width:20px;height:20px;border-radius:50%;border:2px solid var(--latte);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;transition:all .2s;}
    .payment-opt.selected .payment-check{background:var(--caramel);border-color:var(--caramel);color:white;}
    .payment-extra{margin-top:14px;padding:14px;background:var(--foam);border-radius:14px;border:1px solid var(--latte);}
    .card-number-wrap{position:relative;}
    .card-icons{position:absolute;right:12px;top:50%;transform:translateY(-50%);font-size:18px;}
    .change-box{background:var(--cream);border-radius:12px;padding:12px 16px;margin-top:10px;display:flex;justify-content:space-between;align-items:center;}
    .change-label{font-size:13px;color:var(--bark);}
    .change-amount{font-family:'Playfair Display',serif;font-size:22px;font-weight:700;color:var(--green);}

    /* Mini order */
    .order-mini{background:var(--foam);border:1px solid var(--latte);border-radius:16px;padding:16px;margin-bottom:14px;}
    .order-mini-title{font-size:11px;font-weight:600;color:var(--bark);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px;}
    .order-mini-item{display:flex;justify-content:space-between;font-size:13px;margin-bottom:5px;}
    .order-mini-item span:first-child{color:var(--bark);}
    .order-mini-divider{border:none;border-top:1px solid var(--latte);margin:8px 0;}
    .order-mini-total{display:flex;justify-content:space-between;font-weight:700;}
    .order-mini-total span:last-child{color:var(--caramel);font-family:'Playfair Display',serif;}

    /* Checkout nav */
    .checkout-nav{display:flex;gap:10px;margin-top:8px;}
    .btn-back-step{flex:1;padding:12px;border:2px solid var(--latte);background:white;color:var(--bark);border-radius:14px;font-size:14px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;transition:opacity .15s;}
    .btn-back-step:hover{opacity:.7;}
    .btn-next-step{flex:2;padding:12px;background:var(--caramel);color:white;border:none;border-radius:14px;font-size:15px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;transition:opacity .15s,transform .1s;}
    .btn-next-step:hover{opacity:.88;}.btn-next-step:active{transform:scale(.98);}

    /* ═══ TICKET ═══ */
    .ticket-wrapper{max-width:400px;margin:0 auto;padding:24px 16px;}
    .ticket{background:white;border-radius:6px 6px 0 0;box-shadow:0 4px 32px rgba(0,0,0,.14);position:relative;}
    .ticket::after{content:'';display:block;height:18px;background:repeating-linear-gradient(90deg,var(--foam) 0,var(--foam) 12px,white 12px,white 18px);border-top:1px dashed var(--latte);}
    .ticket-header{background:var(--espresso);padding:22px;text-align:center;}
    .ticket-logo{font-size:30px;margin-bottom:5px;}
    .ticket-brand{font-family:'Playfair Display',serif;font-size:22px;color:var(--cream);font-style:italic;}
    .ticket-tagline{font-size:11px;color:var(--latte);margin-top:2px;}
    .ticket-address{font-size:11px;color:var(--caramel);margin-top:4px;}
    .ticket-body{padding:18px;}
    .ticket-row{display:flex;justify-content:space-between;font-size:12px;margin-bottom:5px;}
    .ticket-row span:first-child{color:var(--bark);}
    .ticket-row span:last-child{font-weight:600;color:var(--espresso);text-align:right;max-width:200px;}
    .ticket-divider{border:none;border-top:1px dashed var(--latte);margin:10px 0;}
    .ticket-items-title{font-size:11px;font-weight:600;color:var(--bark);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px;}
    .ticket-item{display:flex;justify-content:space-between;align-items:center;font-size:13px;padding:3px 0;}
    .ticket-item-left{display:flex;align-items:center;gap:6px;flex:1;}
    .ticket-item-qty{background:var(--latte);color:var(--bark);font-size:10px;font-weight:700;padding:1px 5px;border-radius:4px;}
    .ticket-item-name{color:var(--espresso);}
    .ticket-item-price{font-weight:600;color:var(--espresso);}
    .ticket-subtotals{margin:8px 0;}
    .ticket-sub-row{display:flex;justify-content:space-between;font-size:12px;color:var(--bark);margin-bottom:4px;}
    .ticket-total-row{display:flex;justify-content:space-between;align-items:baseline;margin-top:8px;}
    .ticket-total-row span:first-child{font-size:14px;font-weight:700;color:var(--espresso);}
    .ticket-total-row span:last-child{font-family:'Playfair Display',serif;font-size:22px;font-weight:700;color:var(--caramel);}
    .ticket-pay-row{display:flex;justify-content:space-between;font-size:12px;margin-top:5px;}
    .ticket-pay-row span:first-child{color:var(--bark);}
    .ticket-change-box{background:var(--cream);border-radius:10px;padding:10px 14px;margin-top:10px;display:flex;justify-content:space-between;align-items:center;}
    .ticket-change-label{font-size:13px;color:var(--bark);}
    .ticket-change-amount{font-family:'Playfair Display',serif;font-size:20px;font-weight:700;color:var(--green);}
    .ticket-folio{text-align:center;padding:12px 0 4px;}
    .ticket-folio p{font-size:10px;color:var(--bark);}
    .ticket-folio strong{font-size:14px;color:var(--espresso);letter-spacing:2px;display:block;margin:3px 0;}
    .barcode{display:flex;justify-content:center;align-items:flex-end;gap:1px;margin:10px 0 6px;}
    .bc{background:var(--espresso);border-radius:1px;}
    .ticket-thanks{text-align:center;font-size:12px;color:var(--bark);padding:6px 0 10px;}
    .ticket-location{background:var(--cream);margin:0 -18px;padding:12px 18px;margin-top:4px;}
    .ticket-location p{font-size:11px;color:var(--bark);text-align:center;line-height:1.5;}
    .ticket-location strong{color:var(--espresso);}
    .ticket-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:16px;}
    /* ── REVIEW SECTION ── */
    .review-card{background:white;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,.10);padding:24px 20px;margin-top:20px;max-width:400px;margin-left:auto;margin-right:auto;}
    .review-title{font-family:'Playfair Display',serif;font-size:18px;color:var(--espresso);text-align:center;margin-bottom:4px;}
    .review-subtitle{font-size:12px;color:var(--bark);text-align:center;margin-bottom:20px;}
    .review-section{margin-bottom:18px;}
    .review-label{font-size:13px;font-weight:600;color:var(--espresso);margin-bottom:6px;display:flex;align-items:center;gap:6px;}
    .stars-row{display:flex;gap:6px;justify-content:center;}
    .star{font-size:28px;cursor:pointer;transition:transform .15s;line-height:1;filter:grayscale(1);opacity:.4;}
    .star.active{filter:none;opacity:1;transform:scale(1.15);}
    .star:hover{transform:scale(1.2);}
    .review-tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;}
    .review-tag{padding:5px 12px;border-radius:20px;border:1.5px solid var(--latte);font-size:12px;color:var(--bark);cursor:pointer;transition:all .15s;background:white;}
    .review-tag.selected{background:var(--espresso);color:white;border-color:var(--espresso);}
    .review-comment{width:100%;border:1.5px solid var(--latte);border-radius:10px;padding:10px 12px;font-size:13px;font-family:inherit;resize:none;outline:none;color:var(--espresso);margin-top:8px;box-sizing:border-box;}
    .review-comment:focus{border-color:var(--caramel);}
    .btn-send-review{width:100%;padding:13px;background:var(--espresso);color:white;border:none;border-radius:12px;font-size:15px;font-weight:600;cursor:pointer;margin-top:6px;transition:opacity .2s;}
    .btn-send-review:hover{opacity:.88;}
    .review-sent{text-align:center;padding:18px 0 6px;display:none;}
    .review-sent-icon{font-size:48px;display:block;margin-bottom:8px;}
    .review-sent-msg{font-size:15px;color:var(--espresso);font-weight:600;}
    .review-sent-sub{font-size:12px;color:var(--bark);margin-top:4px;}
    .btn-print{padding:12px;background:var(--espresso);color:var(--cream);border:none;border-radius:14px;font-size:14px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;transition:opacity .15s;}
    .btn-print:hover{opacity:.85;}
    .btn-new-order{padding:12px;background:var(--caramel);color:white;border:none;border-radius:14px;font-size:14px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;transition:opacity .15s;}
    .btn-new-order:hover{opacity:.88;}

    /* LOCATION PAGE */
    .location-page{max-width:800px;margin:0 auto;padding:24px;}
    .map-container{width:100%;height:320px;border-radius:20px;overflow:hidden;border:1px solid var(--latte);margin-bottom:16px;}
    .map-container iframe{width:100%;height:100%;border:none;}
    .location-info-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:16px;}
    @media(max-width:540px){.location-info-grid{grid-template-columns:1fr;}}
    .loc-card{background:white;border:1px solid var(--latte);border-radius:16px;padding:16px;}
    .loc-card-icon{font-size:24px;margin-bottom:8px;}
    .loc-card-title{font-weight:600;font-size:14px;color:var(--espresso);margin-bottom:4px;}
    .loc-card-text{font-size:13px;color:var(--bark);line-height:1.5;}
    .loc-card-text a{color:var(--caramel);text-decoration:none;}
    .loc-card-text a:hover{text-decoration:underline;}

    /* ANIMATIONS */
    @keyframes fadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
    @keyframes slideUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
    .card:nth-child(1){animation-delay:.04s}.card:nth-child(2){animation-delay:.08s}
    .card:nth-child(3){animation-delay:.12s}.card:nth-child(4){animation-delay:.16s}
    .card:nth-child(5){animation-delay:.20s}.card:nth-child(6){animation-delay:.24s}
    .card:nth-child(7){animation-delay:.28s}.card:nth-child(8){animation-delay:.32s}
    .card:nth-child(9){animation-delay:.36s}.card:nth-child(10){animation-delay:.40s}

    @media print{
      nav,.ticket-actions,.checkout-steps,.order-mini{display:none!important;}
      body{background:white;}
      .ticket{box-shadow:none;}
      #page-ticket{display:block!important;}
    }
  </style>
</head>
<body>

<!-- NAVBAR -->
<nav>
  <div class="nav-logo" onclick="showPage('catalog')">
    <div class="nav-icon">☕</div>
    <div><div class="nav-title">Café Origen</div><div class="nav-sub">Punto de Venta · Puebla</div></div>
  </div>
  <div style="display:flex;align-items:center;gap:10px;">
    <button onclick="showPage('location')" style="background:none;border:none;cursor:pointer;color:var(--latte);font-size:13px;font-family:'DM Sans',sans-serif;display:flex;align-items:center;gap:5px;">
      📍 <span style="display:none" id="locLabel">Ubicación</span>
    </button>
    <button class="cart-btn" id="navCartBtn" onclick="showPage('cart')">
      🛒 Carrito
      <span class="cart-badge" id="cartBadge" style="display:none">0</span>
    </button>
  </div>
</nav>

<!-- PAGE: CATALOG -->
<div id="page-catalog" class="page active">
  <div class="hero">
    <div class="hero-main">
      <p class="hero-label">Bienvenido a</p>
      <h1>Café Origen</h1>
      <p class="hero-desc">Granos de especialidad · Hecho con amor · Puebla, México</p>
    </div>
    <div class="hero-location">
      <div class="hero-location-inner">
        <div class="loc-item">📍 <span><a href="#" onclick="showPage('location');return false;">Heroica Puebla de Zaragoza</a>, Pue.</span></div>
        <div class="loc-item">🕗 <span>Lun–Vie 7:00–20:00 · Sáb–Dom 8:00–19:00</span></div>
        <div class="loc-item">📞 <span><a href="tel:+522221234567">222 123 4567</a></span></div>
        <div class="loc-item">📦 <span>Envío a domicilio en Puebla Centro</span></div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="filters" id="filters"></div>
    <p class="count" id="productCount"></p>
    <div class="grid" id="productGrid"></div>
  </div>
</div>

<!-- PAGE: DETAIL -->
<div id="page-detail" class="page">
  <div class="container" style="animation:fadeIn .35s ease;">
    <button class="back-btn" onclick="showPage('catalog')">← Volver al catálogo</button>
    <div id="detailContent"></div>
  </div>
</div>

<!-- PAGE: CART -->
<div id="page-cart" class="page">
  <div class="container" style="animation:fadeIn .35s ease;max-width:680px;">
    <div class="cart-header">
      <div class="cart-title-row">
        <button class="back-btn" onclick="showPage('catalog')" style="margin:0">← Catálogo</button>
        <span style="color:var(--latte)">|</span>
        <h2 class="cart-title">Tu Carrito</h2>
        <span class="items-badge" id="cartItemsBadge" style="display:none"></span>
      </div>
      <button class="clear-btn" id="clearBtn" onclick="askClear()">🗑 Vaciar</button>
    </div>
    <div class="confirm-bar" id="confirmBar">
      <p>¿Vaciar el carrito?</p>
      <div class="confirm-btns">
        <button class="confirm-yes" onclick="confirmClear()">Sí, vaciar</button>
        <button class="confirm-no" onclick="cancelClear()">Cancelar</button>
      </div>
    </div>
    <div id="cartContent"></div>
  </div>
</div>

<!-- PAGE: CHECKOUT -->
<div id="page-checkout" class="page">
  <div class="checkout-container" style="animation:fadeIn .35s ease;">
    <button class="back-btn" onclick="showPage('cart')">← Volver al carrito</button>
    <div class="checkout-steps" id="checkoutSteps"></div>
    <div id="checkoutBody"></div>
  </div>
</div>

<!-- PAGE: TICKET -->
<div id="page-ticket" class="page">
  <div class="ticket-wrapper" style="animation:fadeIn .4s ease;">
    <div id="ticketContent"></div>
    <div class="ticket-actions">
      <button class="btn-print" onclick="window.print()">🖨️ Imprimir ticket</button>
      <button class="btn-new-order" onclick="newOrder()">☕ Nuevo pedido</button>
    </div>

    <!-- SECCIÓN DE EVALUACIÓN -->
    <div class="review-card" id="reviewCard">
      <div class="review-title">⭐ Califica tu experiencia</div>
      <div class="review-subtitle">Tu opinión nos ayuda a mejorar. ¡Gracias por tomarte un momento!</div>

      <!-- Atención al cliente -->
      <div class="review-section">
        <div class="review-label">😊 ¿Cómo fue la atención?</div>
        <div class="stars-row" data-group="atencion">
          <span class="star" data-val="1">⭐</span><span class="star" data-val="2">⭐</span>
          <span class="star" data-val="3">⭐</span><span class="star" data-val="4">⭐</span><span class="star" data-val="5">⭐</span>
        </div>
        <div class="review-tags" id="tags-atencion">
          <span class="review-tag" data-group="atencion">Muy amable</span>
          <span class="review-tag" data-group="atencion">Rápido y eficiente</span>
          <span class="review-tag" data-group="atencion">Atento</span>
          <span class="review-tag" data-group="atencion">Necesita mejorar</span>
        </div>
      </div>

      <!-- Entrega -->
      <div class="review-section">
        <div class="review-label">🚴 ¿Cómo fue tu entrega?</div>
        <div class="stars-row" data-group="entrega">
          <span class="star" data-val="1">⭐</span><span class="star" data-val="2">⭐</span>
          <span class="star" data-val="3">⭐</span><span class="star" data-val="4">⭐</span><span class="star" data-val="5">⭐</span>
        </div>
        <div class="review-tags" id="tags-entrega">
          <span class="review-tag" data-group="entrega">Muy puntual</span>
          <span class="review-tag" data-group="entrega">A tiempo</span>
          <span class="review-tag" data-group="entrega">Un poco tarde</span>
          <span class="review-tag" data-group="entrega">Tardó mucho</span>
        </div>
      </div>

      <!-- Estado del pedido -->
      <div class="review-section">
        <div class="review-label">📦 ¿Llegó bien tu pedido?</div>
        <div class="stars-row" data-group="pedido">
          <span class="star" data-val="1">⭐</span><span class="star" data-val="2">⭐</span>
          <span class="star" data-val="3">⭐</span><span class="star" data-val="4">⭐</span><span class="star" data-val="5">⭐</span>
        </div>
        <div class="review-tags" id="tags-pedido">
          <span class="review-tag" data-group="pedido">Perfecto y completo</span>
          <span class="review-tag" data-group="pedido">Bien empacado</span>
          <span class="review-tag" data-group="pedido">Faltó algo</span>
          <span class="review-tag" data-group="pedido">Llegó frío/derramado</span>
        </div>
      </div>

      <!-- Recomendaría -->
      <div class="review-section">
        <div class="review-label">💬 Experiencia general</div>
        <div class="stars-row" data-group="general">
          <span class="star" data-val="1">⭐</span><span class="star" data-val="2">⭐</span>
          <span class="star" data-val="3">⭐</span><span class="star" data-val="4">⭐</span><span class="star" data-val="5">⭐</span>
        </div>
        <div class="review-tags" id="tags-general">
          <span class="review-tag" data-group="general">Definitivamente volvería</span>
          <span class="review-tag" data-group="general">Lo recomendaría</span>
          <span class="review-tag" data-group="general">Tal vez volvería</span>
          <span class="review-tag" data-group="general">No volvería</span>
        </div>
      </div>

      <!-- Comentario libre -->
      <div class="review-section">
        <div class="review-label">✏️ ¿Algo más que quieras decirnos?</div>
        <textarea class="review-comment" id="reviewComment" rows="3" placeholder="Escribe aquí tu comentario (opcional)..."></textarea>
      </div>

      <button class="btn-send-review" onclick="sendReview()">Enviar evaluación ✉️</button>

      <div class="review-sent" id="reviewSent">
        <span class="review-sent-icon">🙏</span>
        <div class="review-sent-msg">¡Gracias por tu evaluación!</div>
        <div class="review-sent-sub">Tu opinión nos ayuda a darte un mejor servicio cada día.</div>
      </div>
    </div>
  </div>
</div>

<!-- PAGE: LOCATION -->
<div id="page-location" class="page">
  <div class="location-page" style="animation:fadeIn .35s ease;">
    <button class="back-btn" onclick="showPage('catalog')">← Volver al catálogo</button>
    <h2 style="font-family:'Playfair Display',serif;font-size:26px;color:var(--espresso);margin-bottom:6px;">📍 Nuestra ubicación</h2>
    <p style="font-size:14px;color:var(--bark);margin-bottom:18px;">Heroica Puebla de Zaragoza, Puebla, México</p>
    <div class="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60453.60764878498!2d-98.24588!3d19.04336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc0b75e3f6765%3A0xd0fd9cb9a37f4da5!2sPuebla%2C%20Pue.%2C%20M%C3%A9xico!5e0!3m2!1ses!2smx!4v1700000000000"
        allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
    <div class="location-info-grid">
      <div class="loc-card">
        <div class="loc-card-icon">🏠</div>
        <div class="loc-card-title">Dirección</div>
        <div class="loc-card-text">Calle 5 de Mayo #23, Centro Histórico<br>Heroica Puebla de Zaragoza<br>Puebla, CP 72000, México</div>
      </div>
      <div class="loc-card">
        <div class="loc-card-icon">🕗</div>
        <div class="loc-card-title">Horarios</div>
        <div class="loc-card-text">
          Lunes a Viernes: 7:00 – 20:00<br>
          Sábados: 8:00 – 19:00<br>
          Domingos: 8:00 – 19:00
        </div>
      </div>
      <div class="loc-card">
        <div class="loc-card-icon">📞</div>
        <div class="loc-card-title">Contacto</div>
        <div class="loc-card-text">
          Tel: <a href="tel:+522221234567">222 123 4567</a><br>
          WhatsApp: <a href="https://wa.me/522221234567" target="_blank">Escríbenos</a><br>
          Email: <a href="mailto:hola@cafeorigen.mx">hola@cafeorigen.mx</a>
        </div>
      </div>
      <div class="loc-card">
        <div class="loc-card-icon">🛵</div>
        <div class="loc-card-title">Zona de entrega</div>
        <div class="loc-card-text">
          Entregamos en Puebla Centro y colonias cercanas.<br>
          Costo de envío: $35 MXN<br>
          Tiempo estimado: 30–45 min
        </div>
      </div>
    </div>
  </div>
</div>

<script>
// ═══════════════ DATA ═══════════════
const CATEGORIES=[
  {id:'all',name:'Todo',emoji:'☕'},{id:'cafe',name:'Cafés',emoji:'☕'},
  {id:'te',name:'Tés',emoji:'🍵'},{id:'frio',name:'Bebidas Frías',emoji:'🧊'},
  {id:'panaderia',name:'Panadería',emoji:'🥐'},{id:'comida',name:'Comida',emoji:'🥗'},
  {id:'postre',name:'Postres',emoji:'🍰'},
];
const PRODUCTS=[
  {id:'esp-001',name:'Espresso',desc:'Concentrado intenso de café de especialidad',price:45,cat:'cafe',img:'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=400&q=80',details:'Preparado con granos de origen único de Chiapas, tostados artesanalmente. Shot de 30ml con notas a chocolate oscuro y nuez.',tags:['caliente','intenso','solo']},
  {id:'cap-002',name:'Cappuccino',desc:'Espresso con leche vaporizada y espuma',price:75,cat:'cafe',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZwf8bKimXDT8UA0zA3xBN9fRn5XUDBqxHCQ&s',details:'Clásico italiano: 1 shot de espresso con leche entera vaporizada y una capa generosa de espuma cremosa.',tags:['caliente','leche','clásico']},
  {id:'lat-003',name:'Café Latte',desc:'Espresso suave con mucha leche vaporizada',price:80,cat:'cafe',img:'https://images.unsplash.com/photo-1592663527359-cf6642f54cff?w=400&q=80',details:'Perfecto para quienes prefieren un café más suave. 1 shot de espresso en una base de leche vaporizada 240ml.',tags:['caliente','suave','leche']},
  {id:'mac-004',name:'Macchiato',desc:'Espresso manchado con espuma de leche',price:60,cat:'cafe',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz0HkdS8M-B4dUr0YgQG4xzaiS5bs9glIB9g&s',details:'Espresso doble con tan sólo una mancha de espuma de leche. Intenso y elegante.',tags:['caliente','intenso']},
  {id:'col-005',name:'Café de Olla',desc:'Café mexicano con canela y piloncillo',price:55,cat:'cafe',img:'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&q=80',details:'Preparado en olla de barro con canela, clavo y piloncillo. Sabor a casa y tradición mexicana.',tags:['caliente','tradicional','mexicano']},
  {id:'dri-006',name:'Dripper V60',desc:'Método de filtrado manual, notas florales',price:90,cat:'cafe',img:'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&q=80',details:'Preparación por goteo manual. Granos de altura de Oaxaca con notas florales y frutales.',tags:['caliente','especialidad','filtro']},
  {id:'mat-007',name:'Matcha Latte',desc:'Té verde japonés con leche vaporizada',price:85,cat:'te',img:'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&q=80',details:'Matcha ceremonial grado A de Uji, Japón. Sin azúcar añadida, sabor vegetal y cremoso.',tags:['caliente','matcha','antioxidante']},
  {id:'cha-008',name:'Chai Latte',desc:'Mezcla de especias indias con leche',price:80,cat:'te',img:'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&q=80',details:'Infusión de té negro, cardamomo, jengibre, canela y pimienta negra con leche vaporizada y miel.',tags:['caliente','especias','cremoso']},
  {id:'ver-009',name:'Té Verde Jazmín',desc:'Té verde delicado con flores de jazmín',price:55,cat:'te',img:'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80',details:'Hojas sueltas de té verde perfumadas con flores de jazmín. Infusionado a 75°C por 2 minutos.',tags:['caliente','floral','relajante']},
  {id:'frc-010',name:'Cold Brew',desc:'Café en frío, 12 horas de extracción',price:85,cat:'frio',img:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80',details:'Café molido grueso macerado en agua fría durante 12 horas. Suave y bajo en acidez.',tags:['frío','intenso','bajo acidez']},
  {id:'frl-011',name:'Frappé de Caramelo',desc:'Café blended con caramelo y crema',price:95,cat:'frio',img:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80',details:'Espresso doble mezclado con hielo, leche, jarabe de caramelo artesanal y crema batida.',tags:['frío','dulce','blended']},
  {id:'lem-012',name:'Limonada de Menta',desc:'Limonada fresca con hojas de menta',price:60,cat:'frio',img:'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&q=80',details:'Limones frescos, agua mineral, jarabe natural y hojas de menta fresca.',tags:['frío','sin café','fresco']},
  {id:'cro-013',name:'Croissant',desc:'Hojaldrado artesanal, crujiente por fuera',price:45,cat:'panaderia',img:'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80',details:'Elaborado con mantequilla francesa 84% grasa. 72 horas de fermentación lenta.',tags:['dulce','artesanal','mantequilla']},
  {id:'ban-014',name:'Pan de Banana',desc:'Bizcocho húmedo con plátano y nueces',price:55,cat:'panaderia',img:'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&q=80',details:'Banana bread casero con plátanos maduros, nueces tostadas, canela y vainilla de Papantla.',tags:['dulce','casero','nuez']},
  {id:'muf-015',name:'Muffin de Arándano',desc:'Esponjoso con arándanos frescos',price:50,cat:'panaderia',img:'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&q=80',details:'Muffin de vainilla con arándanos frescos. Cubierto con crumble de avena y azúcar mascabado.',tags:['dulce','fruta','esponjoso']},
  {id:'avo-016',name:'Tostada de Aguacate',desc:'Pan sourdough con aguacate y semillas',price:110,cat:'comida',img:'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=400&q=80',details:'Pan sourdough artesanal tostado, aguacate Hass de Michoacán, semillas de cáñamo, chiles secos y microgreens.',tags:['salado','vegano','saludable']},
  {id:'qua-017',name:'Quiche Lorraine',desc:'Tarta francesa de queso y tocino',price:95,cat:'comida',img:'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=400&q=80',details:'Masa quebrada rellena de crema, huevos, queso Gruyère y tocino ahumado. Porción individual.',tags:['salado','francés','caliente']},
  {id:'tir-018',name:'Tiramisú',desc:'Postre italiano con café y mascarpone',price:85,cat:'postre',img:'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80',details:'Savoiardi empapados en espresso y amaretto, crema de mascarpone y cacao de Holanda.',tags:['dulce','italiano','café']},
  {id:'chc-019',name:'Brownie de Chocolate',desc:'Denso y húmedo con chispas de chocolate',price:65,cat:'postre',img:'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80',details:'Brownie fudgy con chocolate belga 70% cacao, mantequilla y azúcar mascabado.',tags:['dulce','chocolate','caliente']},
  {id:'che-020',name:'Cheesecake Frutos Rojos',desc:'Base de galleta con crema y coulis',price:90,cat:'postre',img:'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80',details:'Cheesecake al horno con base de galleta, queso Philadelphia y coulis de frambuesa y fresa.',tags:['dulce','fruta','cremoso']},
];
const DELIVERY_OPTS=[
  {id:'local',icon:'🪑',name:'Consumir aquí',desc:'Mesa en el local',price:0,label:'Gratis'},
  {id:'llevar',icon:'🥡',name:'Para llevar',desc:'Empaque para llevar',price:0,label:'Gratis'},
  {id:'domicilio',icon:'🛵',name:'A domicilio',desc:'Entrega Puebla Centro',price:35,label:'+$35'},
];
const PAYMENT_OPTS=[
  {id:'efectivo',icon:'💵',name:'Efectivo',desc:'Pago en caja al recibir'},
  {id:'tarjeta',icon:'💳',name:'Tarjeta débito/crédito',desc:'Visa, Mastercard, AMEX'},
  {id:'transferencia',icon:'📱',name:'Transferencia SPEI',desc:'CLABE: 012 320 0123456789 01'},
  {id:'qr',icon:'📲',name:'CoDi / QR',desc:'Escanea y paga al instante'},
];

// ═══════════════ STATE ═══════════════
let cart=loadCart(),selectedCat='all',currentPage='catalog',currentDetailId=null;
let checkoutStep=1;
let CD={delivery:'local',payment:'efectivo',name:'',phone:'',address:'',colonia:'',notas:'',cashAmount:'',cardNum:'',cardExp:'',cardCvv:'',cardName:'',scheduleDate:'',scheduleTime:''};

function loadCart(){try{return JSON.parse(localStorage.getItem('cafe-cart')||'[]');}catch{return[];}}
function saveCart(){localStorage.setItem('cafe-cart',JSON.stringify(cart));}
function getCI(id){return cart.find(i=>i.id===id);}
function totalItems(){return cart.reduce((s,i)=>s+i.qty,0);}
function subtotal(){return cart.reduce((s,i)=>s+i.price*i.qty,0);}
function deliveryCost(){return DELIVERY_OPTS.find(o=>o.id===CD.delivery)?.price||0;}
function totalPrice(){return subtotal()+deliveryCost();}
function genFolio(){return 'CF-'+Date.now().toString().slice(-6);}

function addToCart(p){const item=getCI(p.id);if(item)item.qty++;else cart.push({id:p.id,name:p.name,price:p.price,img:p.img,qty:1});saveCart();updateCartUI();}
function removeFromCart(id){cart=cart.filter(i=>i.id!==id);saveCart();updateCartUI();}
function decreaseCart(id){const item=getCI(id);if(!item)return;if(item.qty===1)removeFromCart(id);else{item.qty--;saveCart();updateCartUI();}}
function clearCart(){cart=[];saveCart();updateCartUI();}

// ═══════════════ NAV ═══════════════
function showPage(page){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  currentPage=page;
  if(page==='catalog'){renderGrid();}
  if(page==='cart'){renderCart();}
  if(page==='checkout'){checkoutStep=1;renderCheckout();}
  window.scrollTo(0,0);
}
function updateCartUI(){
  const n=totalItems();
  const badge=document.getElementById('cartBadge');
  badge.textContent=n;badge.style.display=n>0?'flex':'none';
  document.getElementById('navCartBtn').classList.toggle('has-items',n>0);
  if(currentPage==='cart')renderCart();
  if(currentPage==='catalog')renderGrid();
  if(currentPage==='detail')renderDetailActions();
}

// ═══════════════ CATALOG ═══════════════
function renderFilters(){
  document.getElementById('filters').innerHTML=CATEGORIES.map(c=>
    `<button class="filter-btn ${selectedCat===c.id?'active':''}" onclick="selectCat('${c.id}')">${c.emoji} ${c.name}</button>`
  ).join('');
}
function selectCat(id){selectedCat=id;renderFilters();renderGrid();}
function renderGrid(){
  const filtered=selectedCat==='all'?PRODUCTS:PRODUCTS.filter(p=>p.cat===selectedCat);
  document.getElementById('productCount').innerHTML=`${filtered.length} producto${filtered.length!==1?'s':''}${selectedCat!=='all'?` &nbsp;·&nbsp; <a onclick="selectCat('all')">Ver todos</a>`:''}`;
  document.getElementById('productGrid').innerHTML=filtered.map(p=>{
    const ci=getCI(p.id);
    return `<div class="card" onclick="openDetail('${p.id}')">
      <div class="card-img-wrap">
        <img class="card-img" src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&q=80'"/>
        <span class="card-tag">${p.tags[0]}</span>
        ${ci?`<span class="card-qty">${ci.qty}</span>`:''}
      </div>
      <div class="card-body">
        <div class="card-name">${p.name}</div>
        <div class="card-desc">${p.desc}</div>
        <div class="card-footer">
          <span class="card-price">$${p.price}</span>
          <button class="add-btn" id="addbtn-${p.id}" onclick="event.stopPropagation();quickAdd('${p.id}')">+ Agregar</button>
        </div>
      </div>
    </div>`;
  }).join('');
}
function quickAdd(id){
  addToCart(PRODUCTS.find(x=>x.id===id));
  const btn=document.getElementById('addbtn-'+id);
  if(btn){btn.textContent='✓ Listo';btn.classList.add('added');setTimeout(()=>{btn.textContent='+ Agregar';btn.classList.remove('added');},1100);}
}

// ═══════════════ DETAIL ═══════════════
function openDetail(id){
  currentDetailId=id;
  const p=PRODUCTS.find(x=>x.id===id);
  const cat=CATEGORIES.find(c=>c.id===p.cat);
  const related=PRODUCTS.filter(x=>x.cat===p.cat&&x.id!==p.id).slice(0,3);
  document.getElementById('detailContent').innerHTML=`
    <div class="detail-card">
      <img class="detail-img" src="${p.img}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&q=80'"/>
      <div class="detail-body">
        <div>
          <div class="detail-cat">${cat.emoji} ${cat.name}</div>
          <h2 class="detail-name">${p.name}</h2>
          <p class="detail-desc">${p.desc}</p>
          <div class="detail-price">$${p.price}<span>MXN</span></div>
          <p class="detail-info">${p.details}</p>
          <div class="detail-tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
        </div>
        <div class="detail-actions" id="detailActions"></div>
      </div>
    </div>
    ${related.length?`<h3 class="related-title">También te puede gustar</h3>
    <div class="related-grid">${related.map(r=>`
      <div class="related-card" onclick="openDetail('${r.id}')">
        <img class="related-img" src="${r.img}" alt="${r.name}" loading="lazy"/>
        <div class="related-body"><div class="related-name">${r.name}</div><div class="related-price">$${r.price}</div></div>
      </div>`).join('')}</div>`:''}`;
  renderDetailActions();showPage('detail');
}
function renderDetailActions(){
  if(!currentDetailId)return;
  const p=PRODUCTS.find(x=>x.id===currentDetailId);
  const ci=getCI(currentDetailId);
  const el=document.getElementById('detailActions');if(!el)return;
  if(!ci){
    el.innerHTML=`<button class="big-add-btn" id="bigAddBtn" onclick="detailAdd()">🛒 Agregar al carrito</button>
    <button class="view-cart-btn" onclick="showPage('cart')">Ver carrito</button>`;
  }else{
    el.innerHTML=`<div class="qty-controls"><button class="qty-btn" onclick="detailDecrease()">−</button>
    <span class="qty-num">${ci.qty}</span><button class="qty-btn" onclick="detailAdd()">+</button></div>
    <p class="subtotal">Subtotal: <strong>$${p.price*ci.qty}</strong></p>
    <button class="view-cart-btn" onclick="showPage('cart')">Ver carrito</button>`;
  }
}
function detailAdd(){const p=PRODUCTS.find(x=>x.id===currentDetailId);addToCart(p);const btn=document.getElementById('bigAddBtn');if(btn){btn.textContent='✅ Agregado';btn.classList.add('added');setTimeout(()=>renderDetailActions(),1000);}}
function detailDecrease(){decreaseCart(currentDetailId);}

// ═══════════════ CART ═══════════════
function renderCart(){
  const n=totalItems();
  const badge=document.getElementById('cartItemsBadge');
  badge.textContent=`${n} artículo${n!==1?'s':''}`;badge.style.display=n>0?'inline-block':'none';
  document.getElementById('clearBtn').style.display=n>0?'flex':'none';
  if(cart.length===0){
    document.getElementById('cartContent').innerHTML=`
      <div class="empty-state"><div class="empty-icon">🛒</div>
      <h3 class="empty-title">Tu carrito está vacío</h3>
      <p class="empty-sub">Agrega productos desde el catálogo</p>
      <button class="go-catalog-btn" onclick="showPage('catalog')">Ver catálogo</button></div>`;return;
  }
  document.getElementById('cartContent').innerHTML=`
    <div class="cart-items">${cart.map(i=>`
      <div class="cart-item">
        <img class="ci-img" src="${i.img}" alt="${i.name}" onclick="openDetail('${i.id}')" onerror="this.src='https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&q=80'"/>
        <div class="ci-info"><div class="ci-name" onclick="openDetail('${i.id}')">${i.name}</div><div class="ci-unit">$${i.price} c/u</div></div>
        <div class="ci-qty">
          <button class="ci-qty-btn" onclick="decreaseCart('${i.id}')">−</button>
          <span class="ci-qty-num">${i.qty}</span>
          <button class="ci-qty-btn" onclick="addToCart(PRODUCTS.find(p=>p.id==='${i.id}'))">+</button>
        </div>
        <div class="ci-subtotal">$${i.price*i.qty}</div>
        <button class="ci-remove" onclick="removeFromCart('${i.id}')">✕</button>
      </div>`).join('')}
    </div>
    <div class="cart-summary">
      <div class="summary-title">Resumen</div>
      <div class="summary-lines">${cart.map(i=>`
        <div class="summary-line"><span>${i.name} × ${i.qty}</span><span>$${i.price*i.qty}</span></div>`).join('')}
      </div>
      <hr class="summary-divider"/>
      <div class="summary-total">
        <span class="summary-total-label">Total</span>
        <span class="summary-total-price">$${subtotal()}<span>MXN</span></span>
      </div>
      <button class="checkout-btn" onclick="showPage('checkout')">Proceder al pago →</button>
      <button class="keep-btn" onclick="showPage('catalog')">Seguir comprando</button>
    </div>`;
}
function askClear(){document.getElementById('confirmBar').classList.add('show');}
function cancelClear(){document.getElementById('confirmBar').classList.remove('show');}
function confirmClear(){clearCart();cancelClear();renderCart();}

// ═══════════════ CHECKOUT ═══════════════
function miniSummaryHTML(){
  return `<div class="order-mini">
    <div class="order-mini-title">🧾 Tu pedido (${totalItems()} artículos)</div>
    ${cart.map(i=>`<div class="order-mini-item"><span>${i.name} × ${i.qty}</span><span>$${i.price*i.qty}</span></div>`).join('')}
    ${deliveryCost()>0?`<div class="order-mini-item"><span>Envío</span><span>$${deliveryCost()}</span></div>`:''}
    <div class="order-mini-divider"></div>
    <div class="order-mini-total"><span>Total</span><span>$${totalPrice()} MXN</span></div>
  </div>`;
}
function renderCheckout(){
  const steps=[{n:1,label:'Entrega'},{n:2,label:'Pago'},{n:3,label:'Confirmar'}];
  document.getElementById('checkoutSteps').innerHTML=steps.map((s,i)=>`
    ${i>0?`<div class="step-line ${checkoutStep>s.n?'done':''}"></div>`:''}
    <div class="step">
      <div class="step-circle ${checkoutStep===s.n?'active':checkoutStep>s.n?'done':''}">${checkoutStep>s.n?'✓':s.n}</div>
      <div class="step-label ${checkoutStep===s.n?'active':''}">${s.label}</div>
    </div>`).join('');
  if(checkoutStep===1)renderStep1();
  else if(checkoutStep===2)renderStep2();
  else renderStep3();
}

function renderStep1(){
  const today=new Date();
  const dates=Array.from({length:7},(_,i)=>{const d=new Date(today);d.setDate(today.getDate()+i);return d;});
  const times=['7:00','7:30','8:00','8:30','9:00','9:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30'];
  document.getElementById('checkoutBody').innerHTML=`
    ${miniSummaryHTML()}
    <div class="checkout-section">
      <h3>🚚 Tipo de entrega</h3>
      <div class="delivery-opts">${DELIVERY_OPTS.map(o=>`
        <div class="delivery-opt ${CD.delivery===o.id?'selected':''}" onclick="selectDelivery('${o.id}',this)">
          <div class="delivery-opt-icon">${o.icon}</div>
          <div class="delivery-opt-name">${o.name}</div>
          <div class="delivery-opt-desc">${o.desc}</div>
          <div class="delivery-opt-price">${o.label}</div>
        </div>`).join('')}
      </div>
    </div>
    <div class="checkout-section" id="addressSection" style="${CD.delivery==='domicilio'?'':'display:none'}">
      <h3>📍 Datos de entrega</h3>
      <div class="form-grid">
        <div class="form-group"><label class="form-label">Nombre completo *</label>
          <input class="form-input" id="inp-name" value="${CD.name}" placeholder="Tu nombre" oninput="CD.name=this.value"/></div>
        <div class="form-group"><label class="form-label">Teléfono *</label>
          <input class="form-input" id="inp-phone" value="${CD.phone}" placeholder="222 000 0000" oninput="CD.phone=this.value"/></div>
        <div class="form-group form-full"><label class="form-label">Calle y número *</label>
          <input class="form-input" id="inp-address" value="${CD.address}" placeholder="Ej: Av. Reforma #45" oninput="CD.address=this.value"/></div>
        <div class="form-group"><label class="form-label">Colonia</label>
          <input class="form-input" id="inp-colonia" value="${CD.colonia}" placeholder="Centro Histórico" oninput="CD.colonia=this.value"/></div>
        <div class="form-group"><label class="form-label">Ciudad</label>
          <input class="form-input" value="Heroica Puebla de Zaragoza" readonly style="opacity:.6;cursor:not-allowed"/></div>
        <div class="form-group form-full"><label class="form-label">Referencias</label>
          <input class="form-input" id="inp-notas" value="${CD.notas}" placeholder="Entre calles, color de la fachada, etc." oninput="CD.notas=this.value"/></div>
      </div>
    </div>
    <div class="checkout-section" id="scheduleSection" style="${CD.delivery!=='domicilio'?'':'display:none'}">
      <h3>📅 ¿Cuándo quieres recoger?</h3>
      <div class="schedule-grid">
        <div class="form-group"><label class="form-label">Fecha</label>
          <select class="form-select" id="inp-date" onchange="CD.scheduleDate=this.value">
            ${dates.map(d=>{const s=d.toISOString().slice(0,10);const l=d.toLocaleDateString('es-MX',{weekday:'short',day:'numeric',month:'short'});return`<option value="${s}" ${CD.scheduleDate===s?'selected':''}>${l}</option>`;}).join('')}
          </select></div>
        <div class="form-group"><label class="form-label">Hora</label>
          <select class="form-select" id="inp-time" onchange="CD.scheduleTime=this.value">
            ${times.map(t=>`<option value="${t}" ${CD.scheduleTime===t?'selected':''}>${t} hrs</option>`).join('')}
          </select></div>
      </div>
      <p style="font-size:12px;color:var(--bark);margin-top:10px;">📍 Calle 5 de Mayo #23, Centro Histórico, Puebla</p>
    </div>
    <div class="checkout-nav">
      <button class="btn-back-step" onclick="showPage('cart')">← Carrito</button>
      <button class="btn-next-step" onclick="nextStep(1)">Continuar al pago →</button>
    </div>`;
}

function selectDelivery(id,el){
  CD.delivery=id;
  document.querySelectorAll('.delivery-opt').forEach(e=>e.classList.remove('selected'));
  el.classList.add('selected');
  document.getElementById('addressSection').style.display=id==='domicilio'?'block':'none';
  document.getElementById('scheduleSection').style.display=id!=='domicilio'?'block':'none';
}

function renderStep2(){
  document.getElementById('checkoutBody').innerHTML=`
    ${miniSummaryHTML()}
    <div class="checkout-section">
      <h3>💳 Método de pago</h3>
      <div class="payment-opts">${PAYMENT_OPTS.map(o=>`
        <div class="payment-opt ${CD.payment===o.id?'selected':''}" onclick="selectPayment('${o.id}',this)">
          <div class="payment-opt-icon">${o.icon}</div>
          <div class="payment-opt-info"><div class="payment-opt-name">${o.name}</div><div class="payment-opt-desc">${o.desc}</div></div>
          <div class="payment-check">${CD.payment===o.id?'✓':''}</div>
        </div>`).join('')}
      </div>

      <div id="extraEfectivo" class="payment-extra" style="${CD.payment==='efectivo'?'':'display:none'}">
        <div class="form-group"><label class="form-label">¿Con cuánto paga? (MXN)</label>
          <input class="form-input" id="inp-cash" type="number" min="${totalPrice()}" value="${CD.cashAmount||''}" placeholder="Ej: 200" oninput="CD.cashAmount=this.value;calcChange()"/>
        </div>
        <div id="changeBox" style="display:none">
          <div class="change-box"><span class="change-label">💰 Cambio a entregar</span><span class="change-amount" id="changeAmt">$0</span></div>
        </div>
      </div>

      <div id="extraTarjeta" class="payment-extra" style="${CD.payment==='tarjeta'?'':'display:none'}">
        <div class="form-grid">
          <div class="form-group form-full"><label class="form-label">Número de tarjeta</label>
            <div class="card-number-wrap">
              <input class="form-input" id="inp-cardnum" value="${CD.cardNum}" placeholder="0000 0000 0000 0000" maxlength="19" oninput="CD.cardNum=this.value;fmtCard(this)"/>
              <div class="card-icons">💳</div>
            </div></div>
          <div class="form-group"><label class="form-label">Vencimiento</label>
            <input class="form-input" id="inp-exp" value="${CD.cardExp}" placeholder="MM/AA" maxlength="5" oninput="CD.cardExp=this.value"/></div>
          <div class="form-group"><label class="form-label">CVV</label>
            <input class="form-input" id="inp-cvv" value="${CD.cardCvv}" placeholder="000" maxlength="4" type="password" oninput="CD.cardCvv=this.value"/></div>
          <div class="form-group form-full"><label class="form-label">Nombre en la tarjeta</label>
            <input class="form-input" id="inp-cardname" value="${CD.cardName}" placeholder="Como aparece en la tarjeta" oninput="CD.cardName=this.value"/></div>
        </div>
      </div>

      <div id="extraTransferencia" class="payment-extra" style="${CD.payment==='transferencia'?'':'display:none'}">
        <p style="font-size:12px;font-weight:600;color:var(--bark);margin-bottom:8px;">Datos para transferencia SPEI</p>
        <div style="display:flex;flex-direction:column;gap:5px;">
          <div style="display:flex;justify-content:space-between;font-size:13px;"><span style="color:var(--bark)">Banco</span><strong>BBVA Bancomer</strong></div>
          <div style="display:flex;justify-content:space-between;font-size:13px;"><span style="color:var(--bark)">CLABE</span><strong>012 320 0123456789 01</strong></div>
          <div style="display:flex;justify-content:space-between;font-size:13px;"><span style="color:var(--bark)">Beneficiario</span><strong>Café Origen S.A.</strong></div>
          <div style="display:flex;justify-content:space-between;font-size:13px;"><span style="color:var(--bark)">Concepto</span><strong>${genFolio()}</strong></div>
          <div style="display:flex;justify-content:space-between;font-size:14px;margin-top:6px;"><span style="color:var(--bark)">Monto</span><strong style="color:var(--caramel)">$${totalPrice()} MXN</strong></div>
        </div>
      </div>

      <div id="extraQR" class="payment-extra" style="${CD.payment==='qr'?'':'display:none'};text-align:center;">
        <div style="font-size:70px;line-height:1;padding:10px 0;">📲</div>
        <p style="font-size:13px;color:var(--bark);">Escanea con tu app bancaria (CoDi)</p>
        <p style="font-family:'Playfair Display',serif;font-size:20px;font-weight:700;color:var(--caramel);margin-top:4px;">$${totalPrice()} MXN</p>
        <p style="font-size:11px;color:var(--latte);margin-top:4px;">El QR real aparecería aquí en producción</p>
      </div>
    </div>
    <div class="checkout-nav">
      <button class="btn-back-step" onclick="prevStep()">← Atrás</button>
      <button class="btn-next-step" onclick="nextStep(2)">Revisar pedido →</button>
    </div>`;
  if(CD.payment==='efectivo'&&CD.cashAmount)calcChange();
}

function selectPayment(id,el){
  CD.payment=id;
  document.querySelectorAll('.payment-opt').forEach(e=>{e.classList.remove('selected');e.querySelector('.payment-check').textContent='';});
  el.classList.add('selected');el.querySelector('.payment-check').textContent='✓';
  ['Efectivo','Tarjeta','Transferencia','QR'].forEach(x=>{const d=document.getElementById('extra'+x);if(d)d.style.display='none';});
  const map={efectivo:'Efectivo',tarjeta:'Tarjeta',transferencia:'Transferencia',qr:'QR'};
  const show=document.getElementById('extra'+map[id]);if(show)show.style.display='block';
}
function calcChange(){
  const paid=parseFloat(document.getElementById('inp-cash')?.value||0);
  const cb=document.getElementById('changeBox');const ca=document.getElementById('changeAmt');
  if(paid>=totalPrice()&&paid>0){cb.style.display='block';ca.textContent='$'+(paid-totalPrice()).toFixed(2);}
  else{cb.style.display='none';}
}
function fmtCard(input){let v=input.value.replace(/\D/g,'').substring(0,16);input.value=v.replace(/(.{4})/g,'$1 ').trim();}

function renderStep3(){
  const deliv=DELIVERY_OPTS.find(o=>o.id===CD.delivery);
  const pay=PAYMENT_OPTS.find(o=>o.id===CD.payment);
  document.getElementById('checkoutBody').innerHTML=`
    ${miniSummaryHTML()}
    <div class="checkout-section">
      <h3>📋 Confirmación del pedido</h3>
      <div style="display:flex;flex-direction:column;gap:10px;">
        <div style="background:var(--foam);border-radius:12px;padding:14px;">
          <p style="font-size:11px;font-weight:600;color:var(--bark);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px;">Entrega</p>
          <p style="font-size:14px;font-weight:600;color:var(--espresso);">${deliv.icon} ${deliv.name} ${deliv.price>0?'<span style="color:var(--caramel)">+$'+deliv.price+'</span>':''}</p>
          ${CD.delivery==='domicilio'&&CD.address?`<p style="font-size:13px;color:var(--bark);margin-top:4px;">📍 ${CD.address}${CD.colonia?', '+CD.colonia:''}, Puebla</p>`:''}
          ${CD.delivery==='domicilio'&&CD.notas?`<p style="font-size:12px;color:var(--bark);margin-top:2px;">📝 ${CD.notas}</p>`:''}
          ${CD.delivery!=='domicilio'&&CD.scheduleDate?`<p style="font-size:13px;color:var(--bark);margin-top:4px;">📅 ${CD.scheduleDate} a las ${CD.scheduleTime||'?'} hrs</p>`:''}
          ${CD.delivery!=='domicilio'?`<p style="font-size:12px;color:var(--bark);margin-top:2px;">📍 Calle 5 de Mayo #23, Centro Histórico, Puebla</p>`:''}
        </div>
        <div style="background:var(--foam);border-radius:12px;padding:14px;">
          <p style="font-size:11px;font-weight:600;color:var(--bark);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px;">Pago</p>
          <p style="font-size:14px;font-weight:600;color:var(--espresso);">${pay.icon} ${pay.name}</p>
          ${CD.payment==='efectivo'&&CD.cashAmount?`<p style="font-size:13px;color:var(--bark);margin-top:4px;">Paga con: <strong>$${parseFloat(CD.cashAmount).toFixed(2)}</strong> · Cambio: <strong style="color:var(--green)">$${(parseFloat(CD.cashAmount)-totalPrice()).toFixed(2)}</strong></p>`:''}
          ${CD.payment==='tarjeta'&&CD.cardNum?`<p style="font-size:13px;color:var(--bark);margin-top:4px;">•••• •••• •••• ${CD.cardNum.replace(/\s/g,'').slice(-4)} — ${CD.cardName||''}</p>`:''}
        </div>
        <div style="background:var(--caramel);border-radius:12px;padding:14px;display:flex;justify-content:space-between;align-items:center;">
          <span style="color:white;font-weight:700;font-size:15px;">Total a pagar</span>
          <span style="color:white;font-family:'Playfair Display',serif;font-size:26px;font-weight:700;">$${totalPrice()} MXN</span>
        </div>
      </div>
    </div>
    <div class="checkout-nav">
      <button class="btn-back-step" onclick="prevStep()">← Atrás</button>
      <button class="btn-next-step" onclick="placeOrder()">✅ Confirmar pedido</button>
    </div>`;
}

function nextStep(from){
  if(from===1){
    if(CD.delivery==='domicilio'){
      const a=document.getElementById('inp-address');
      if(!a||!a.value.trim()){a&&(a.classList.add('error'),a.focus());alert('Por favor ingresa tu dirección.');return;}
      CD.address=a.value;
      const name=document.getElementById('inp-name');const phone=document.getElementById('inp-phone');
      if(name)CD.name=name.value;if(phone)CD.phone=phone.value;
      const col=document.getElementById('inp-colonia');if(col)CD.colonia=col.value;
      const notas=document.getElementById('inp-notas');if(notas)CD.notas=notas.value;
    }
    const date=document.getElementById('inp-date');const time=document.getElementById('inp-time');
    if(date)CD.scheduleDate=date.value;if(time)CD.scheduleTime=time.value;
    checkoutStep=2;
  }else if(from===2){
    if(CD.payment==='efectivo'){
      const cash=parseFloat(document.getElementById('inp-cash')?.value||0);
      if(!cash||cash<totalPrice()){alert(`Ingresa un monto mayor o igual a $${totalPrice()}`);return;}
      CD.cashAmount=cash;
    }
    if(CD.payment==='tarjeta'){
      const num=document.getElementById('inp-cardnum')?.value.replace(/\s/g,'');
      const exp=document.getElementById('inp-exp')?.value;
      const cvv=document.getElementById('inp-cvv')?.value;
      if(!num||num.length<16){alert('Número de tarjeta inválido (16 dígitos).');return;}
      if(!exp||exp.length<5){alert('Ingresa la fecha de vencimiento (MM/AA).');return;}
      if(!cvv||cvv.length<3){alert('Ingresa el CVV.');return;}
      CD.cardNum=num;CD.cardExp=exp;CD.cardCvv=cvv;
      const cn=document.getElementById('inp-cardname');if(cn)CD.cardName=cn.value;
    }
    checkoutStep=3;
  }
  renderCheckout();window.scrollTo(0,0);
}
function prevStep(){checkoutStep--;renderCheckout();window.scrollTo(0,0);}

// ═══════════════ TICKET ═══════════════
function placeOrder(){
  const folio=genFolio();
  const now=new Date();
  const dateStr=now.toLocaleDateString('es-MX',{weekday:'long',day:'2-digit',month:'long',year:'numeric'});
  const timeStr=now.toLocaleTimeString('es-MX',{hour:'2-digit',minute:'2-digit'});
  const deliv=DELIVERY_OPTS.find(o=>o.id===CD.delivery);
  const pay=PAYMENT_OPTS.find(o=>o.id===CD.payment);
  const bars=Array.from({length:40},()=>`<div class="bc" style="width:${Math.random()>.5?2:1}px;height:${20+Math.floor(Math.random()*18)}px"></div>`).join('');

  let changeHTML='';
  if(CD.payment==='efectivo'&&CD.cashAmount){
    const change=(parseFloat(CD.cashAmount)-totalPrice()).toFixed(2);
    changeHTML=`<div class="ticket-change-box"><span class="ticket-change-label">💰 Cambio</span><span class="ticket-change-amount">$${change}</span></div>`;
  }

  document.getElementById('ticketContent').innerHTML=`
    <div class="ticket">
      <div class="ticket-header">
        <div class="ticket-logo">☕</div>
        <div class="ticket-brand">Café Origen</div>
        <div class="ticket-tagline">Granos de especialidad · Hecho con amor</div>
        <div class="ticket-address">📍 Calle 5 de Mayo #23, Centro Histórico, Puebla</div>
      </div>
      <div class="ticket-body">
        <div class="ticket-row"><span>Folio</span><span style="font-family:'Playfair Display',serif;letter-spacing:1px">${folio}</span></div>
        <div class="ticket-row"><span>Fecha</span><span>${dateStr}</span></div>
        <div class="ticket-row"><span>Hora</span><span>${timeStr} hrs</span></div>
        ${CD.name?`<div class="ticket-row"><span>Cliente</span><span>${CD.name}</span></div>`:''}
        ${CD.phone?`<div class="ticket-row"><span>Teléfono</span><span>${CD.phone}</span></div>`:''}
        <div class="ticket-row"><span>Entrega</span><span>${deliv.icon} ${deliv.name}</span></div>
        ${CD.delivery==='domicilio'&&CD.address?`<div class="ticket-row"><span>Dirección</span><span>${CD.address}${CD.colonia?', '+CD.colonia:''}</span></div>`:''}
        ${CD.delivery!=='domicilio'&&CD.scheduleDate?`<div class="ticket-row"><span>Recoger</span><span>${CD.scheduleDate} ${CD.scheduleTime||''}</span></div>`:''}
        ${CD.notas?`<div class="ticket-row"><span>Notas</span><span>${CD.notas}</span></div>`:''}
        <hr class="ticket-divider"/>
        <div class="ticket-items-title">Detalle del pedido</div>
        ${cart.map(i=>`
          <div class="ticket-item">
            <div class="ticket-item-left">
              <span class="ticket-item-qty">${i.qty}</span>
              <span class="ticket-item-name">${i.name}</span>
            </div>
            <span class="ticket-item-price">$${i.price*i.qty}</span>
          </div>`).join('')}
        <hr class="ticket-divider"/>
        <div class="ticket-subtotals">
          <div class="ticket-sub-row"><span>Subtotal (${totalItems()} artículos)</span><span>$${subtotal()}</span></div>
          ${deliveryCost()>0?`<div class="ticket-sub-row"><span>Costo de envío</span><span>$${deliveryCost()}</span></div>`:''}
          <div class="ticket-sub-row"><span>Descuento</span><span>$0.00</span></div>
        </div>
        <div class="ticket-total-row"><span>TOTAL</span><span>$${totalPrice()} MXN</span></div>
        <hr class="ticket-divider"/>
        <div class="ticket-pay-row"><span>Método de pago</span><span>${pay.icon} ${pay.name}</span></div>
        ${CD.payment==='efectivo'&&CD.cashAmount?`<div class="ticket-pay-row"><span>Pagó con</span><span>$${parseFloat(CD.cashAmount).toFixed(2)}</span></div>`:''}
        ${changeHTML}
        <hr class="ticket-divider"/>
        <div class="ticket-folio"><p>Número de folio</p><strong>${folio}</strong>
          <div class="barcode">${bars}</div>
        </div>
        <div class="ticket-thanks">¡Gracias por tu visita! ☕<br>Esperamos verte pronto en Café Origen</div>
        <div class="ticket-location">
          <p><strong>Café Origen</strong> · Calle 5 de Mayo #23<br>
          Centro Histórico, Heroica Puebla de Zaragoza<br>
          Tel: 222 123 4567 · cafeorigen.mx</p>
        </div>
      </div>
    </div>`;

  clearCart();
  showPage('ticket');
}

function newOrder(){
  CD={delivery:'local',payment:'efectivo',name:'',phone:'',address:'',colonia:'',notas:'',cashAmount:'',cardNum:'',cardExp:'',cardCvv:'',cardName:'',scheduleDate:'',scheduleTime:''};
  showPage('catalog');
}

// ═══════════════ REVIEW ═══════════════
const reviewScores = {atencion:0, entrega:0, pedido:0, general:0};

document.addEventListener('click', function(e){
  // Stars
  if(e.target.classList.contains('star')){
    const row = e.target.closest('.stars-row');
    if(!row) return;
    const group = row.dataset.group;
    const val = parseInt(e.target.dataset.val);
    reviewScores[group] = val;
    row.querySelectorAll('.star').forEach((s,i)=>{
      s.classList.toggle('active', i < val);
    });
  }
  // Tags
  if(e.target.classList.contains('review-tag')){
    const group = e.target.dataset.group;
    document.querySelectorAll(`.review-tag[data-group="${group}"]`).forEach(t=>t.classList.remove('selected'));
    e.target.classList.add('selected');
  }
});

function sendReview(){
  const filled = Object.values(reviewScores).some(v=>v>0);
  if(!filled){ alert('Por favor califica al menos un apartado antes de enviar.'); return; }
  document.querySelector('.btn-send-review').style.display='none';
  document.querySelectorAll('.review-section').forEach(s=>s.style.display='none');
  document.querySelector('.review-comment').style.display='none';
  document.querySelector('.review-label:last-of-type') && null;
  document.querySelectorAll('.review-label').forEach(l=>l.style.display='none');
  document.getElementById('reviewSent').style.display='block';
}

// ═══════════════ INIT ═══════════════
renderFilters();renderGrid();updateCartUI();
// Show location label on larger screens
if(window.innerWidth>600)document.getElementById('locLabel').style.display='inline';
</script>
</body>
</html>
