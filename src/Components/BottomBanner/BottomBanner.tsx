import './BottomBanner.css'
import logo from '../../assets/IMG_7483_PNG.png'
const BottomBanner = () => {
  return (
    <div className='ne-BottomBanner'>
        {/* Facebook */}
        <a href="">
        <svg height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="m32 64h-16a16.0007 16.0007 0 0 1 -16-16v-32a16.0007 16.0007 0 0 1 16-16h32a16 16 0 0 1 16 16v32a16 16 0 0 1 -16 16h-6a5 5 0 0 0 -10 0z" fill="#3764b9"/><path d="m30 18h18a9.0006 9.0006 0 0 0 .92-17.954c-.306-.017-.609-.046-.92-.046h-32a16.0007 16.0007 0 0 0 -16 16v32a30.0007 30.0007 0 0 1 30-30" fill="#507dd2"/><path d="m48 32a16 16 0 1 0 16 16v-32a16 16 0 0 1 -16 16" fill="#1e4ba0"/><path d="m52 18a2 2 0 0 1 -2 2h-6a2 2 0 0 0 -2 2v8h7.56a2 2 0 0 1 1.9612 2.392c-.3713 1.857-.8757 4.379-1.2 6a2 2 0 0 1 -1.9612 1.608h-6.36v24h-10v-24h-6a2 2 0 0 1 -2-2v-6a2 2 0 0 1 2-2h6v-8a12 12 0 0 1 12-12h6a2 2 0 0 1 2 2z" fill="#fff"/></g></svg>
        </a>
        {/* Instagram */}
        <a href="">
        <svg height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="m48 64h-32a16.0007 16.0007 0 0 1 -16-16v-32a16.0007 16.0007 0 0 1 16-16h32a16 16 0 0 1 16 16v32a16 16 0 0 1 -16 16" fill="#ff3a55"/><path d="m30 18h18a9.0006 9.0006 0 0 0 .92-17.954c-.306-.017-.609-.046-.92-.046h-32a16.0007 16.0007 0 0 0 -16 16v32a30.0007 30.0007 0 0 1 30-30" fill="#ff796c"/><path d="m48 32a16 16 0 1 0 16 16v-32a16 16 0 0 1 -16 16" fill="#e00047"/></g><circle cx="44.5" cy="19.5" fill="#fff" r="2.5"/><path d="m32 24a8 8 0 1 1 -8 8 8.0042 8.0042 0 0 1 8-8zm0-4a12 12 0 1 1 -12 12 12.0057 12.0057 0 0 1 12-12z" fill="#fff" fill-rule="evenodd"/><path d="m52 22a10 10 0 0 0 -10-10h-20a10 10 0 0 0 -10 10v20a10 10 0 0 0 10 10h20a10 10 0 0 0 10-10zm4 0a14 14 0 0 0 -14-14h-20a14 14 0 0 0 -14 14v20a14 14 0 0 0 14 14h20a14 14 0 0 0 14-14z" fill="#fff" fill-rule="evenodd"/></svg>
        </a>
        <img src={logo} alt="Glow Up logo" className='bottom-banner-logo' />
        {/* phone */}
        <a href="">
            <svg id="Layer_2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 2"><linearGradient id="linear-gradient" gradientUnits="userSpaceOnUse" x1="29.29" x2="482.71" y1="29.29" y2="482.71"><stop offset="0" stop-color="#0bf"/><stop offset="1" stop-color="#0036ff"/></linearGradient><g id="Icon"><g id="_64" data-name="64"><rect fill="url(#linear-gradient)" height="512" rx="100" width="512"/><g fill="#fff"><path d="m342.71 167.48h-27.79l-8.38 24.93h27.79zm-15.57 14.93h-6.69l1.66-4.93h6.69z"/><path d="m260.55 224.28h1.45l-4.05 12.16c-1.98 4.78-1.21 10.1 2.11 14.38 2.18 2.8 5.47 5.23 10.06 7.42 4.47 2.14 9.09 3.23 13.72 3.23 10.6 0 14.12-6.64 15.14-9.5.02-.05 9.4-27.7 9.4-27.7h2.63l-4.22 12.55c-1.99 4.79-1.22 10.12 2.11 14.4 2.18 2.8 5.47 5.23 10.06 7.42 4.47 2.14 8.95 3.23 13.31 3.23 10.54 0 14.29-6.54 15.42-9.35.07-.17.13-.34.19-.52l9.37-27.78 23.46-.16c2.76 0 11.99-.98 15.03-13.57 0-.03.02-.07.02-.1.58-2.5.87-5.14.87-7.87 0-2.92-.48-5.97-1.43-9.06-3.34-11.82-11.53-13.1-14.91-13.1h-8.15l.42-1.25h15.5c2.76 0 11.99-.98 15.06-13.67.58-2.5.87-5.15.87-7.87 0-2.92-.48-5.97-1.43-9.06-3.34-11.82-11.53-13.1-14.91-13.1h-.15l3.02-8.89c1.74-4.69.77-9.77-2.63-13.93-3.73-4.66-9.51-7.69-17.65-9.27-2.29-.5-4.36-.74-6.3-.74-7.24 0-12.89 3.65-15.12 9.77-.03.08-7.81 23.25-7.81 23.25h-2.56l3.24-9.55c1.48-4.09 2.88-13.82-13.01-20.89-4.39-1.9-8.68-2.87-12.77-2.87-11.05 0-14.8 6.83-15.9 9.76-.04.1-.07.19-.1.29l-7.91 23.26h-22.77c-.22-.01-.45-.02-.67-.02-4.57 0-8.71 2.21-11.67 6.21-2.17 2.94-3.52 6.31-4.02 10.03-.33 2.49-.5 5.2-.5 8.28 0 4.45 1.12 8.48 3.31 11.98 2.75 4.59 7.19 7.22 12.2 7.22h9.38l-.42 1.25h-14.98c-.22-.01-.45-.02-.67-.02-4.56 0-8.71 2.21-11.67 6.22-2.17 2.93-3.52 6.31-4.01 10.03-.33 2.46-.5 5.25-.5 8.28 0 4.45 1.12 8.48 3.32 11.98 2.75 4.59 7.19 7.22 12.2 7.22zm-5.1-26.14c.27-2.04.99-3.85 2.15-5.42 1.16-1.56 2.48-2.28 3.99-2.15h22.48l7.15-21.25h-23.3c-1.5 0-2.73-.82-3.68-2.45-1.23-1.91-1.84-4.15-1.84-6.74s.13-4.9.41-6.95c.27-2.04.99-3.85 2.15-5.42 1.15-1.56 2.48-2.28 3.99-2.15h30.24l10.22-30.04c.82-2.18 2.99-3.27 6.54-3.27 2.72 0 5.65.68 8.79 2.04 6.13 2.73 8.65 5.52 7.56 8.38l-7.77 22.89h23.7l10.01-29.84c1.09-3 4.43-3.88 10.01-2.66 5.72 1.09 9.67 3 11.85 5.72 1.23 1.5 1.56 2.93 1.02 4.29l-7.56 22.27h14.1c2.45 0 4.22 1.98 5.31 5.93.68 2.18 1.02 4.26 1.02 6.23s-.2 3.85-.61 5.62c-.95 3.95-2.73 5.93-5.31 5.93h-22.68l-7.15 21.25h22.07c2.45 0 4.22 1.98 5.31 5.93.68 2.18 1.02 4.26 1.02 6.23s-.2 3.85-.61 5.62c-.96 3.95-2.73 5.93-5.31 5.93l-30.65.2-11.65 34.54c-.82 2.04-2.86 3.07-6.13 3.07-2.86 0-5.86-.75-8.99-2.25-6.27-3-8.65-6.06-7.15-9.2l8.79-26.16h-23.71l-11.65 34.33c-.68 1.91-2.59 2.86-5.72 2.86s-6.27-.75-9.4-2.25c-6.27-2.99-8.65-6.06-7.15-9.2l8.58-25.75h-15.33c-1.5 0-2.73-.82-3.68-2.45-1.23-1.91-1.84-4.15-1.84-6.74s.13-4.9.41-6.95z"/><path d="m408.24 312.69c-8.02-7.08-24.06-19.06-32.9-25.57-10.23-7.53-22.66-11.68-35-11.68s-23.61 3.92-33.2 11.32c-4.01 3.1-9.72 7.82-16.97 14.03-1.24 1.07-2.84 1.65-4.5 1.65-1.11 0-2.23-.27-3.23-.77-15.47-7.81-29.54-18-41.82-30.31-12.3-12.27-22.49-26.34-30.29-41.81-1.29-2.56-.95-5.6.88-7.73 6.21-7.25 10.93-12.96 14.03-16.98 15.27-19.76 15.12-47.17-.36-68.2-6.51-8.85-18.49-24.88-25.57-32.91-9.39-10.63-21.96-16.49-35.39-16.49-9.55 0-19.07 2.86-27.52 8.27-6.79 4.35-14.64 10.91-22.7 18.97-15.4 15.4-26.76 43.33-26.41 64.98.51 31.58 5.62 55.08 17.12 78.56 12.35 25.23 32.54 51.17 65.46 84.09s58.86 53.11 84.09 65.46c23.48 11.49 46.98 16.61 78.56 17.12h.97c21.78 0 48.7-11.11 64.01-26.42 8.07-8.07 14.63-15.92 18.97-22.7 11.33-17.7 13.18-44.02-8.22-62.92zm-.2 57.52c-3.56 5.56-9.38 12.78-17.62 21.02-14.01 14.01-39.38 23.78-57.74 23.48-54.69-.88-91.6-15.51-155.74-79.65s-78.78-101.05-79.65-155.74c-.29-18.36 9.48-43.74 23.48-57.74 8.24-8.24 15.46-14.06 21.02-17.62 14.72-9.43 35.31-10.26 50.03 6.41 6.73 7.63 18.41 23.25 25.01 32.21 11.94 16.23 13.78 38.95.5 56.16-3.66 4.74-9.25 11.37-13.71 16.58-4.47 5.22-5.31 12.61-2.21 18.74 8.33 16.5 19.22 31.47 32.16 44.38 12.91 12.94 27.88 23.83 44.38 32.16 6.14 3.09 13.52 2.26 18.74-2.21 5.21-4.47 11.85-10.05 16.58-13.71 17.2-13.29 39.93-11.45 56.16.5 8.96 6.6 24.59 18.28 32.21 25.01 16.67 14.72 15.84 35.31 6.41 50.03z"/></g></g></g></svg>
        </a>
        {/* whtasapp */}
        <a href="">
        <svg height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="m48 64h-32a16.0007 16.0007 0 0 1 -16-16v-32a16.0007 16.0007 0 0 1 16-16h32a16 16 0 0 1 16 16v32a16 16 0 0 1 -16 16" fill="#00d264"/><path d="m30 18h18a9.0006 9.0006 0 0 0 .92-17.954c-.306-.017-.609-.046-.92-.046h-32a16.0007 16.0007 0 0 0 -16 16v32a30.0007 30.0007 0 0 1 30-30" fill="#00eb78"/><path d="m48 32a16 16 0 1 0 16 16v-32a16 16 0 0 1 -16 16" fill="#00b950"/><g fill="#fff"><path d="m21.673 47.093a2.0027 2.0027 0 0 1 1.593.218 18.981 18.981 0 1 0 -6.581-6.574 1.9938 1.9938 0 0 1 .216 1.588c-.557 1.971-1.901 6.675-1.901 6.675s4.704-1.344 6.673-1.907zm-8.454-4.359a23.0015 23.0015 0 1 1 8.047 8.047s-6.377 1.822-9.535 2.725a1.0012 1.0012 0 0 1 -1.237-1.237c.903-3.158 2.725-9.535 2.725-9.535z"/><path d="m21.981 24.786a18.7035 18.7035 0 0 0 17.224 17.352h.002a4.964 4.964 0 0 0 3.894-1.44l.698-.698a1.76 1.76 0 0 0 .515-1.243v-1.482a1.0011 1.0011 0 0 0 -.553-.895c-1.053-.526-3.339-1.669-4.459-2.229a1.0009 1.0009 0 0 0 -1.155.187c-.558.558-1.44 1.441-1.94 1.94a1.001 1.001 0 0 1 -.903.274l-.009-.002a10.0005 10.0005 0 0 1 -7.845-7.845l-.002-.009a1.001 1.001 0 0 1 .274-.903c.499-.5 1.382-1.382 1.94-1.94a1.0009 1.0009 0 0 0 .187-1.155c-.56-1.12-1.703-3.406-2.229-4.459a1.0011 1.0011 0 0 0 -.895-.553h-1.26a2.1382 2.1382 0 0 0 -1.587.706c-.201.224-.432.48-.664.738a4.86 4.86 0 0 0 -1.238 3.589c.002.022.003.044.005.067z"/></g></g></svg>
        </a>
    </div>
  )
}

export default BottomBanner